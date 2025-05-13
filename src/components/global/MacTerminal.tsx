import { useState, useEffect, useRef } from 'react';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { userConfig } from '../../config/userConfig';
import DraggableWindow from './DraggableWindow';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type ChatHistory = {
  messages: Message[];
  input: string;
};

interface MacTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Customize these placeholder messages for the input field
const PLACEHOLDER_MESSAGES = [
  'Tapez votre question...',
  'Quelles sont vos compétences ?',
  'Où êtes-vous situé ?',
  'Quels sont les projets sur lesquels vous avez travaillé ?',
];

export default function MacTerminal({ isOpen, onClose }: MacTerminalProps) {
  const [chatHistory, setChatHistory] = useState<ChatHistory>({
    messages: [],
    input: '',
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];

    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 100);

    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);

  // Customize this welcome message with your information
  const welcomeMessage = `Bienvenue sur mon CV

Prénom/Nom: ${userConfig.name}
Rôle: ${userConfig.role}
Locatisation: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Demandez-moi tout ce que vous voulez !
`;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Customize the system prompt with your personal information
  const systemPrompt = `IMPORTANT: Tu es ${userConfig.name} themselves. Vous devez toujours parler à la première personne ("I", "my", "me"). Never refer to "${userConfig.name}" in third-person.
DATE ACTUELLE: ${formattedDate} - Il faut toujours utiliser cette date exacte lorsqu'on parle de la date/année en cours.

Example responses:
Q: "Où habitez-vous ?"
R: "Je vis à ${userConfig.location}"

Q: "Quel est votre parcours ?"
R: "Je suis un ${userConfig.role} en mettant l'accent sur ${userConfig.roleFocus}"

Q: "Quel âge avez-vous ??"
R: "J'ai ${userConfig.age} ans"

Informations essentielles me concernant:
- J'ai ${userConfig.age} ans
- Je vis à ${userConfig.location}
- Je suis un ${userConfig.role}
- Mon adresse email est ${userConfig.contact.email}
- Je suis née à Bourges, dans le département du Cher (18)

Mes compétences techniques:
${userConfig.skills.map(skill => `- ${skill}`).join('\n')}

Mon éducation:
- ${userConfig.education[0].degree} in ${userConfig.education[0].major}
- ${userConfig.education[0].institution}, ${userConfig.education[0].location} (${userConfig.education[0].year})

Mon expérience professionnelle:
${userConfig.experience.map(exp => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`).join('\n')}

Mes projets:
${userConfig.projects.map(project => `- ${project.title}: ${project.description}`).join('\n')}

Règles de réponse:
1. TOUJOURS utiliser la première personne (je, moi, mon)
2. Ne jamais dire "${userConfig.name}" ou me désigner à la troisième personne
3. Les réponses doivent être concises et professionnelles
4. Utiliser le formatage markdown le cas échéant
5. Maintenir un ton amical et conversationnel

Si une question n'a aucun rapport avec mon travail ou mon portefeuille, dites : "Ce n'est pas mon domaine d'expertise. N'hésitez pas à m'envoyer un courriel à l'adresse suivante ${userConfig.contact.email} et nous pourrons en discuter !"`;

  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: 'assistant', content: welcomeMessage },
      ],
    }));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory.messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();

    if (!userInput) return;

    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: 'user', content: userInput }],
      input: '',
    }));

    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...chatHistory.messages,
            { role: 'user', content: userInput },
          ],
        }),
      });

      if (!response.ok) throw new Error('Échec de la réponse');

      const data = await response.json();

      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: 'assistant', content: data.message },
        ],
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: 'assistant',
            content: `J'ai du mal a répondre à votre demande. Veuillez m'envoyer un email à l'adresse suivante ${userConfig.contact.email}`,
          },
        ],
      }));
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title={`${userConfig.website}: ~ (zsh)`}
      onClose={onClose}
      initialPosition={{ 
        x: Math.floor(window.innerWidth * 0.1), 
        y: Math.floor(window.innerHeight * 0.1) 
      }}
      initialSize={{ width: 700, height: 500 }}
      className="bg-black/80 backdrop-blur-sm"
    >
      <div className='p-4 text-gray-200 font-mono text-sm h-full flex flex-col overflow-hidden'>
        <div className='flex-1 overflow-y-auto bg-black/50 rounded-lg p-4'>
          {chatHistory.messages.map((msg, index) => (
            <div key={index} className='mb-2'>
              {msg.role === 'user' ? (
                <div className='flex items-start space-x-2'>
                  <span className='text-green-400 font-bold'>{'>'}</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              ) : (
                <div className='flex items-start space-x-2'>
                  <span className='text-green-400 font-bold'>${userConfig.website}:</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className='flex items-center space-x-1'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></div>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></div>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className='mt-2 bg-black/50 rounded-lg p-2'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2'>
            <span className='whitespace-nowrap text-green-400 font-bold'>{userConfig.website} root %</span>
            <input
              type='text'
              value={chatHistory.input}
              onChange={handleInputChange}
              className='w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400'
              placeholder={placeholder}
            />
          </div>
        </form>
      </div>
    </DraggableWindow>
  );
}
