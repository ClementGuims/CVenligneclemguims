import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaApple, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  IoSearchSharp,
  IoBatteryHalfOutline,
  IoCellular,
  IoDocumentText,
  IoCodeSlash,
  IoPerson,
  IoBriefcase,
  IoSchool,
  IoMail,
  IoCall,
  IoHelpCircle,
} from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { userConfig } from '../../config/userConfig';
import HelpModal from './HelpModal';
import photocv from '../../assets/images/photo_cv.jpg';

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  action?: () => void;
  submenu?: MenuItem[];
};

interface MacToolbarProps {
  onTerminalClick?: () => void;
  onShowTutorial?: () => void;
}

export default function MacToolbar({
  onTerminalClick,
  onShowTutorial,
}: MacToolbarProps) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSignature, setShowSignature] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatMacDate = (date: Date) => {
    const weekday = date.toLocaleString('fr-FR', { weekday: 'short' });
    const month = date.toLocaleString('fr-FR', { month: 'short' }); 
    const day = date.getDate().toString().padStart(2, '0');            
    const hour = date.getHours().toString().padStart(2, '0');           
    const minute = date.getMinutes().toString().padStart(2, '0');       
  
    return `${weekday} ${day} ${month} ${hour}:${minute}`;
  };
  
  const formatIPhoneTime = (date: Date) => {
    const hour = date.getHours().toString().padStart(2, '0');  // format 24h 
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };
  

  const handleVSCodeClick = () => {
    window.location.href = 'vscode:/';
  };

  const handlerecherche = () => {
    window.open("https://www.google.com/", "_blank");
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleAction = (action?: () => void) => {
    if (action) {
      action();
      setActiveMenu(null);
    }
  };

  const menus: Record<string, MenuItem[]> = {
    Fichier: [
      {
        label: 'CV',
        icon: <IoDocumentText size={16} />,
        action: () => window.open(userConfig.resume.url, '_blank'),
      },
      {
        label: 'Portfolio',
        icon: <IoCodeSlash size={16} />,
        action: () => window.open("https://www.portfolio.cf-evolution.com/", '_blank'),
      },
    ],
    Edition: [
      {
        label: 'Copier Email',
        icon: <IoMail size={16} />,
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.email);
          alert('Email copié dans le presse-papiers!');
        },
      },
      {
        label: 'Copier Téléphone',
        icon: <IoCall size={16} />,
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.phone);
          alert('Numéro de téléphone copié dans le presse-papiers!');
        },
      },
    ],
    Présentation: [
      {
      label: 'A propos de moi',
        icon: <IoPerson size={16} />,
        submenu: [
          {
            label: 'Education',
            icon: <IoSchool size={16} />,
            action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          },
          {
            label: 'Experiences',
            icon: <IoBriefcase size={16} />,
            action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          },
        ],
      },
    ],
    Contact: [
      {
        label: 'LinkedIn',
        icon: <FaLinkedin size={16} />,
        action: () => window.open(userConfig.social.linkedin, '_blank'),
      },
      {
        label: 'Email',
        icon: <FaEnvelope size={16} />,
        action: () => window.open(`mailto:${userConfig.contact.email}`),
      },
      {
        label: 'GitHub',
        icon: <FaGithub size={16} />,
        action: () => window.open(userConfig.social.github, '_blank'),
      },
    ],
    Aide: [
      {
        label: "Afficher l'aide",
        icon: <IoHelpCircle size={16} />,
        action: () => setShowHelp(true),
      },
      {
        label: 'Afficher le tutoriel',
        icon: <IoHelpCircle size={16} />,
        action: () => onShowTutorial?.(),
      },
    ],
  };

  const renderMenu = (menuItems: MenuItem[]) => (
    <div className="absolute top-full left-0 mt-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]">
      {menuItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleAction(item.action)}
            className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2"
          >
            {item.icon}
            {item.label}
          </button>
          {item.submenu && (
            <div className="absolute left-full top-0 ml-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]">
              {item.submenu.map((subItem, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => handleAction(subItem.action)}
                  className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2"
                >
                  {subItem.icon}
                  {subItem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <HelpModal 
        isOpen={showHelp} 
        onClose={() => setShowHelp(false)}
        onTerminalClick={onTerminalClick}
      />
      <div className='sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium'>
        <span className='font-semibold'>
          {formatIPhoneTime(currentDateTime)}
        </span>
        <div className='flex items-center gap-1.5'>
          <IoCellular size={20} />
          <MdWifi size={20} />
          <IoBatteryHalfOutline size={24} />
        </div>
      </div>

      <div className='sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm'>
        <div className='flex items-center space-x-4' ref={menuRef}>
          <FaApple size={16} />
          <div className="relative">
            <span 
              className='font-semibold hover:text-gray-300 transition-colors cursor-pointer'
              onMouseEnter={() => setShowSignature(true)}
              onMouseLeave={() => setShowSignature(false)}
            >
              {userConfig.name}
            </span>
            {showSignature && (
              <div className="absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-xl z-[100]">
                <img className="rounded-lg" src="https://www.cf-evolution.com/wp-content/uploads/2025/05/photo_cv.jpg" alt="Photo Clement Guimard" />
              </div>
            )}
          </div>
          {Object.entries(menus).map(([menu, items]) => (
            <div key={menu} className="relative">
              <span 
                className='cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </span>
              {activeMenu === menu && renderMenu(items)}
            </div>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          {/* <VscVscode
            size={16}
            className='cursor-pointer hover:opacity-80 transition-opacity'
            onClick={handleVSCodeClick}
            title='Open in VSCode'
          /> */}
          <MdWifi size={16} onClick={handleVSCodeClick}/>
          <IoSearchSharp size={16} onClick={handlerecherche}/>
          <span className='cursor-default'>
            {formatMacDate(currentDateTime)}
          </span>
        </div>
      </div>
    </>
  );
}
