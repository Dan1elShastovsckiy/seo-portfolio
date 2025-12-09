// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowLeft, Send, 
  Menu, X, MessageCircle, Code
} from 'lucide-react';
import { SeoHead } from './SeoHead';
import { content, socialLinks } from './data';

// --- ICONS & UI COMPONENTS ---

const HHIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/> 
    {/* Simplified HH icon placeholder. You can insert real SVG path */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold">hh</text>
  </svg>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- MODAL COMPONENT ---

const ContactModal = ({ isOpen, onClose, langData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-slide-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{langData.headers.modalTitle}</h3>
        <p className="text-sm text-gray-500 mb-6">{langData.headers.modalSubtitle}</p>

        <div className="space-y-4">
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" rel="noreferrer"
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-green-50 hover:border-green-200 transition group"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-green-700">WhatsApp</div>
              <div className="text-sm text-gray-500">{socialLinks.phoneDisplay}</div>
            </div>
          </a>

          <a 
            href={socialLinks.telegram} 
            target="_blank" rel="noreferrer"
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50 hover:border-blue-200 transition group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
              <Send size={20} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Telegram</div>
              <div className="text-sm text-gray-500">@switchleveler</div>
            </div>
          </a>

          <a 
            href={socialLinks.hh} 
            target="_blank" rel="noreferrer"
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-red-50 hover:border-red-200 transition group"
          >
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <HHIcon />
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-red-600">HeadHunter</div>
              <div className="text-sm text-gray-500">Resume Profile</div>
            </div>
          </a>

          <div className="relative my-4">
             <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
             <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or email</span></div>
          </div>

          <a 
            href={`mailto:${socialLinks.email}`}
            className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            <Mail size={18} /> {socialLinks.email}
          </a>
        </div>
      </div>
    </div>
  );
};

// --- LAYOUT & HEADER ---

const Layout = ({ children, lang, setLang, openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const t = content[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для "умной" навигации по якорям
  const handleNavClick = (anchorId) => {
    setIsMenuOpen(false);
    
    // Если мы не на главной, сначала переходим на главную
    const targetPath = lang === 'en' ? '/en' : '/';
    if (location.pathname !== targetPath) {
      navigate(targetPath);
      // Ждем пока отрендерится главная, потом скроллим
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Если мы уже на главной, просто скроллим
      const element = document.getElementById(anchorId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    setLang(newLang);
    // Простая смена URL при переключении
    if (newLang === 'en') navigate('/en');
    else navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={lang === 'en' ? '/en' : '/'} className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
            {t.personalInfo.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => handleNavClick('experience')} className="hover:text-blue-600 transition">{t.nav.resume}</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-blue-600 transition">{t.nav.projects}</button>
            
            <button 
              onClick={toggleLang}
              className="px-2 py-1 border rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-100"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>

            <button 
              onClick={openModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              {t.nav.hire}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLang}
              className="px-2 py-1 border rounded text-xs font-bold uppercase tracking-wide"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg absolute w-full">
            <button onClick={() => handleNavClick('experience')} className="block w-full text-left py-2 font-medium text-gray-700">{t.nav.resume}</button>
            <button onClick={() => handleNavClick('projects')} className="block w-full text-left py-2 font-medium text-gray-700">{t.nav.projects}</button>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold"
            >
              {t.nav.hire}
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="mb-6 font-medium text-gray-400">© {new Date().getFullYear()} {t.personalInfo.name}</p>
          <div className="flex justify-center gap-6">
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition"><MessageCircle size={24} /></a>
            <a href={socialLinks.telegram} target="_blank" rel="noreferrer" className="hover:text-white transition"><Send size={24} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin size={24} /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white transition"><Github size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AboutSeoSection = ({ data }) => {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {data.title}
        </h2>
        <div 
          className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line max-w-none"
          dangerouslySetInnerHTML={{ __html: data.text }} // Если в тексте есть HTML теги
        />
        {/* Можно просто {data.text} если там нет HTML */}
      </div>
    </section>
  );
};

// --- PAGES ---

const HomePage = ({ lang }) => {
  const t = content[lang];

  return (
    <div className="bg-gray-50 font-sans text-gray-800 animate-fade-in">
      {/* Вставляем SEO */}
      <SeoHead 
        title={`${t.personalInfo.name} - ${t.personalInfo.title}`}
        description={t.personalInfo.about}
        lang={lang}
        type="profile"
        path={lang === 'en' ? '' : ''} // Пустой путь для главной
      />
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 border-b">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg shrink-0">
            <img src="/assets/images/avatar_default.webp" alt={t.personalInfo.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">{t.personalInfo.name}</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-4">{t.personalInfo.title}</h2>
            <p className="text-gray-600 max-w-xl leading-relaxed mb-6">{t.personalInfo.about}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><MapPin size={16} /> {t.personalInfo.location}</span>
              <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-1 hover:text-blue-600"><Mail size={16} /> {socialLinks.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">{t.headers.skills}</h3>
        <div className="flex flex-wrap gap-3">
          {t.personalInfo.skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-3">{t.headers.experience}</h3>
        <div className="space-y-8">
          {t.experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white"></div>
              <h4 className="text-xl font-bold text-gray-900">{job.company}</h4>
              <div className="text-blue-600 font-medium mb-2 text-sm">{job.role} | {job.period}</div>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-3">{t.headers.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project) => (
              <Link 
                to={lang === 'en' ? `/en/project/${project.id}` : `/project/${project.id}`} 
                key={project.id} 
                className="group block h-full"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden bg-gray-200 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Project'}}
                    />
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-2 py-1 text-xs font-bold rounded text-gray-800 shadow-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition">{project.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">{project.shortDesc}</p>
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                      {lang === 'ru' ? 'Подробнее' : 'View Case'} <ArrowLeft className="rotate-180" size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* --- НОВАЯ SEO СЕКЦИЯ --- */}
      <AboutSeoSection data={t.seoSection} />
    </div>
  );
};

const ProjectDetail = ({ lang, openModal }) => {
  const { id } = useParams();
  const t = content[lang];
  const project = t.projects.find(p => p.id === id);

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <SeoHead 
        title={`${project.title} | ${t.personalInfo.name}`}
        description={project.shortDesc}
        lang={lang}
        type="article"
        path={`project/${project.id}`}
      />
      
      <ScrollToTop />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Кнопка Назад */}
        <Link 
          to={lang === 'en' ? '/en#projects' : '/#projects'} 
          className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> {lang === 'ru' ? 'Назад к проектам' : 'Back to Projects'}
        </Link>
        
        {/* Header Проекта */}
        <div className="mb-10 border-b pb-10">
           <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border border-gray-100 bg-gray-50">
             <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[400px] object-contain p-4" // object-contain чтобы логотипы не обрезались
              />
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
             <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{project.title}</h1>
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  {project.category}
                </span>
             </div>
             
             {/* Кнопки Link / Github */}
             <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
               {project.link && (
                 <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition shadow-lg font-medium">
                   {lang === 'ru' ? 'На сайт' : 'Visit Site'} <ExternalLink size={18} className="ml-2" />
                 </a>
               )}
               {project.githubLink && (
                 <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-lg font-medium">
                   GitHub <Code size={18} className="ml-2" />
                 </a>
               )}
             </div>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Левая колонка: КОНТЕНТ БЛОКИ */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{lang === 'ru' ? 'О проекте' : 'About Project'}</h3>
              
              {/* Рендеринг контент-блоков */}
              {project.contentBlocks ? (
                <div className="space-y-8">
                  {project.contentBlocks.map((block, idx) => {
                    if (block.type === 'text') {
                      return <p key={idx} className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{block.content}</p>;
                    }
                    if (block.type === 'image') {
                      return (
                        <div key={idx} className="my-6">
                          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <img src={block.src} alt={block.caption} className="w-full h-auto" loading="lazy" />
                          </div>
                          {block.caption && <p className="text-sm text-gray-500 mt-2 text-center italic">{block.caption}</p>}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                // Fallback для старых проектов без блоков
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{project.fullDesc}</p>
              )}
            </div>
            
            {/* Результаты */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">{t.headers.keyResults}</h3>
              <p className="text-green-900 font-medium text-lg">{project.result}</p>
            </div>
          </div>

          {/* Правая колонка: Сайдбар */}
          <div className="space-y-8">
            {project.stack && (
              <div>
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest text-gray-400">{t.headers.techStack}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center sticky top-24">
              <h4 className="font-bold text-gray-900 mb-2">{lang === 'ru' ? 'Хотите такой же результат?' : 'Need similar results?'}</h4>
              <p className="text-sm text-gray-600 mb-6">{lang === 'ru' ? 'Я готов обсудить ваш проект.' : 'I can help you build or grow your project.'}</p>
              <button onClick={openModal} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md">
                {t.nav.hire}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

function App() {
  // Состояние выбранного языка ('ru' или 'en')
  // В реальном приложении можно брать из URL, но для простоты прокинем через Router
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Русская версия (по умолчанию) */}
        <Route 
          path="/" 
          element={<LayoutWrapper lang="ru" modalOpen={modalOpen} setModalOpen={setModalOpen}><HomePage lang="ru" /></LayoutWrapper>} 
        />
        <Route 
          path="/project/:id" 
          element={<LayoutWrapper lang="ru" modalOpen={modalOpen} setModalOpen={setModalOpen}><ProjectDetail lang="ru" openModal={() => setModalOpen(true)} /></LayoutWrapper>} 
        />

        {/* Английская версия */}
        <Route 
          path="/en" 
          element={<LayoutWrapper lang="en" modalOpen={modalOpen} setModalOpen={setModalOpen}><HomePage lang="en" /></LayoutWrapper>} 
        />
        <Route 
          path="/en/project/:id" 
          element={<LayoutWrapper lang="en" modalOpen={modalOpen} setModalOpen={setModalOpen}><ProjectDetail lang="en" openModal={() => setModalOpen(true)} /></LayoutWrapper>} 
        />
      </Routes>
    </Router>
  );
}

// Обертка чтобы прокинуть состояние языка и модалки
const LayoutWrapper = ({ children, lang, modalOpen, setModalOpen }) => {
  // Функция для смены языка внутри компонента (через URL)
  // Но состояние lang приходит сверху.
  // Здесь мы просто рендерим Layout
  
  // Хак чтобы обновить состояние, если мы перешли по ссылке
  const [currentLang, setCurrentLang] = useState(lang);
  
  useEffect(() => {
    setCurrentLang(lang);
  }, [lang]);

  return (
    <Layout lang={currentLang} setLang={setCurrentLang} openModal={() => setModalOpen(true)}>
      {children}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} langData={content[currentLang]} />
    </Layout>
  );
};

export default App;