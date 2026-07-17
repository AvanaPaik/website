// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Avana Paik',
    title: 'Student | Bsc Economics with Data Science',
    image: getAsset('images/profilepic_github.png'), // Customize or replace with your profile image
    description:
      'I am Avana Paik, a first-year undergraduate student studying for a B.Sc. in Economics with Data Science at Christ University,\n' +
      '\n' +
      ' primarily motivated by my interest in exploring the complex relationships between human behaviour, data, and technology, and their subsequent impact on economic outcomes.\n' +
      '\n' +
      'I have basic technical skills in Microsoft Excel, Python, and SQL, which I am currently actively seeking to develop through academic coursework, self-study, and projects in data analysis.\n' +
      '\n' 
    tagline: 'Aspiring Economist & Data Analyst | Learning, Researching, and Building Impact',
    location: 'Kolkata, India',
  },

  seo: {
    title: 'Your Name – Your Title',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Student', 'Economist', 'Data Analyst', 'Writer'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Carmel High School',
      degree: 'Completed Higher Secondary Education',
      year: '2025',
      image: getAsset('images/education/placeholder.png'),
      
    },
    {
      institution: 'Christ Unuversity,Bangalore',
      degree: 'Undergraduate',
      year: '2025-2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Currently pursuing undergraduate studies in Bsc Economincs with Data Science'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Your Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Your Organization',
      time: '(MMM YYYY – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
    {
      title: 'Previous Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Previous Organization',
      time: '(MMM YYYY – MMM YYYY)',
      desp: ['Key contribution 1', 'Key contribution 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Macroeconomic Trends and Policy Analysis: India and Japan(2003-2022)',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Conducted a comparative analysis of India and Japan using key macroeconomic indicators including inflation, government expenditure, lending interest rates, GDP growth, and GDP per capita to examine differences in fiscal policy, monetary conditions, and economic development trajectories.',
      Githublink: '/macro_cia3.pdf',
    },
    {
      title: 'From Education Gains to Employment Gaps: Female Labour Force Participation in India',
      cardImage: getAsset('images/project/placeholder.png'),
      description: ' An urban development case study examining unequal accessibility in Jayanagar, Bengaluru through Amartya Sen's Capability Approach, with policy recommendations for creating more inclusive and universally accessible public infrastructure.',
      Githublink: 'public/Women_job.jpeg',
    },
     {
      title: 'From Education Gains to Employment Gaps: Female Labour Force Participation in India',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'This project explores the disconnect between rising female education levels and persistently low female labour force participation in India. Using data visualization and graphical analysis, the study examines employment trends, socio-economic barriers, and structural challenges affecting women’s participation in the workforce.',
      Githublink: '2533325_2533316Jayanagar_Audit_Scorecard.html',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'avanapaik@gmail.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
