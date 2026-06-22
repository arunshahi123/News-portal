import { useState } from "react";

const BREAKING_NEWS = "G7 Leaders Reach Historic Climate Agreement — Pledging Net Zero by 2040";

const ARTICLES = [
  {
    id: 1,
    category: "World",
    tag: "world",
    title: "Ukraine Peace Talks Resume in Geneva After 18-Month Stalemate",
    description:
      "Senior diplomats from over 40 nations gathered in Geneva this week as ceasefire negotiations between Ukraine and Russia resumed for the first time in over a year. Officials cautiously expressed hope for a preliminary framework before the end of the quarter.",
    date: "June 22, 2026",
    readTime: "4 min read",
    emoji: "🌍",
    color: "bg-blue-600",
    featured: true,
  },
  {
    id: 2,
    category: "Technology",
    tag: "technology",
    title: "OpenAI Unveils GPT-6 with Real-Time Video Understanding",
    description:
      "OpenAI's latest model can process live video streams and respond to visual queries in under 200ms, marking a breakthrough in multimodal AI. Enterprise rollout begins next month for select partners.",
    date: "June 21, 2026",
    readTime: "3 min read",
    emoji: "🤖",
    color: "bg-purple-600",
    featured: true,
  },
  {
    id: 3,
    category: "Science",
    tag: "science",
    title: "NASA's Artemis IV Crew Successfully Lands on Lunar South Pole",
    description:
      "Four astronauts touched down near the Shackleton Crater in what NASA calls the most complex crewed landing in history. The mission aims to drill for water ice and test long-duration habitat modules.",
    date: "June 20, 2026",
    readTime: "5 min read",
    emoji: "🚀",
    color: "bg-indigo-600",
    featured: true,
  },
  {
    id: 4,
    category: "Business",
    tag: "business",
    title: "Apple Surpasses $5 Trillion Market Cap for the First Time",
    description:
      "Fueled by record Vision Pro sales and AI subscription revenue, Apple became the first company in history to reach a $5 trillion valuation. Analysts credit the company's vertical integration strategy.",
    date: "June 19, 2026",
    readTime: "3 min read",
    emoji: "📈",
    color: "bg-orange-600",
    featured: false,
  },
  {
    id: 5,
    category: "Environment",
    tag: "environment",
    title: "Great Barrier Reef Shows Signs of Recovery After Decade of Bleaching",
    description:
      "Marine biologists report unprecedented coral regrowth across 30% of the reef following coordinated global cooling efforts and local water quality programs. It is described as the most positive signal in a generation.",
    date: "June 18, 2026",
    readTime: "4 min read",
    emoji: "🌊",
    color: "bg-teal-600",
    featured: false,
  },
  {
    id: 6,
    category: "Culture",
    tag: "culture",
    title: "Cannes Palme d'Or Goes to First AI-Assisted Feature Film",
    description:
      "A groundbreaking Iranian drama, partially scripted using generative AI tools, won the top prize at Cannes this year. The win sparked intense debate about authorship and the future of filmmaking.",
    date: "June 17, 2026",
    readTime: "4 min read",
    emoji: "🎬",
    color: "bg-rose-600",
    featured: false,
  },
  {
    id: 7,
    category: "Health",
    tag: "health",
    title: "WHO Approves World's First Universal Flu Vaccine for Global Distribution",
    description:
      "After seven years of trials, the World Health Organization has greenlighted a single-shot flu vaccine effective against all known influenza strains. Mass production is set to begin in late 2026.",
    date: "June 16, 2026",
    readTime: "5 min read",
    emoji: "💉",
    color: "bg-green-600",
    featured: false,
  },
  {
    id: 8,
    category: "Sports",
    tag: "sports",
    title: "FIFA World Cup 2026 Opens in New York to Record 3.5 Billion Viewers",
    description:
      "The opening ceremony of the first tri-nation World Cup drew the largest global television audience in sporting history. Brazil and Argentina are early favorites as group stage play begins.",
    date: "June 15, 2026",
    readTime: "3 min read",
    emoji: "⚽",
    color: "bg-yellow-600",
    featured: false,
  },
  {
    id: 9,
    category: "Politics",
    tag: "politics",
    title: "India Becomes World's Second Largest Economy, Overtaking Germany",
    description:
      "New IMF data confirms India has surpassed Germany to claim the second spot in global GDP rankings, behind only the United States. The milestone reflects two decades of rapid manufacturing and tech sector growth.",
    date: "June 14, 2026",
    readTime: "4 min read",
    emoji: "🏛️",
    color: "bg-red-700",
    featured: false,
  },
];

const CATEGORIES = ["All", "World", "Technology", "Science", "Business", "Environment", "Culture", "Health", "Sports", "Politics"];

const categoryAccent = {
  World: "text-blue-600 border-blue-600",
  Technology: "text-purple-600 border-purple-600",
  Science: "text-indigo-600 border-indigo-600",
  Business: "text-orange-600 border-orange-600",
  Environment: "text-teal-600 border-teal-600",
  Culture: "text-rose-600 border-rose-600",
  Health: "text-green-600 border-green-600",
  Sports: "text-yellow-600 border-yellow-600",
  Politics: "text-red-700 border-red-700",
};

const categoryBg = {
  World: "bg-blue-600",
  Technology: "bg-purple-600",
  Science: "bg-indigo-600",
  Business: "bg-orange-600",
  Environment: "bg-teal-600",
  Culture: "bg-rose-600",
  Health: "bg-green-600",
  Sports: "bg-yellow-600",
  Politics: "bg-red-700",
};

function Navbar({ activeNav, setActiveNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Homepage", "About", "Articles", "Contact"];
  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-stone-900 tracking-tight">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <path d="M6 7h12M6 11h12M6 15h7M6 19h4" />
          </svg>
          <span>Pulse<span className="text-red-700">News</span></span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setActiveNav(l)}
              className={`text-sm font-medium transition-colors ${activeNav === l ? "text-red-700" : "text-stone-500 hover:text-stone-900"}`}
            >
              {l}
            </button>
          ))}
          <button className="bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors">
            Subscribe
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-stone-700" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => { setActiveNav(l); setMenuOpen(false); }}
              className={`text-sm text-left font-medium ${activeNav === l ? "text-red-700" : "text-stone-600"}`}>{l}</button>
          ))}
          <button className="bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded w-fit">Subscribe</button>
        </div>
      )}
    </nav>
  );
}

function BreakingBar() {
  return (
    <div className="bg-red-700 text-white text-sm flex items-center gap-3 px-4 py-2 overflow-hidden">
      <span className="bg-black/25 font-bold uppercase tracking-widest text-xs px-2 py-0.5 rounded shrink-0">Breaking</span>
      <span className="truncate font-medium">{BREAKING_NEWS}</span>
    </div>
  );
}

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative min-h-[500px] flex items-center bg-stone-900 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute bg-white/5 border border-white/10"
            style={{ width: 120 + (i % 4) * 40, height: 120 + (i % 3) * 30, top: `${(i * 17) % 90}%`, left: `${(i * 13) % 85}%`, transform: `rotate(${i * 15}deg)` }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-stone-900/70 to-red-950/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <span className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 block">Est. 2026 · Independent Journalism</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-lg">
            Your Trusted Source for <span className="text-red-400">News</span> and Insights
          </h1>
          <p className="text-stone-400 mt-4 text-base max-w-sm leading-relaxed">
            Breaking stories, expert analysis, and global perspectives — delivered daily.
          </p>
        </div>

        <div className="bg-black/80 border border-white/10 p-6 w-full max-w-xs rounded-sm shrink-0">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-white font-semibold">You're subscribed!</p>
              <p className="text-stone-400 text-sm mt-1">Daily headlines in your inbox.</p>
            </div>
          ) : (
            <>
              <h3 className="text-white font-bold text-lg mb-1">Stay in the loop</h3>
              <p className="text-stone-400 text-sm mb-4 leading-relaxed">Never miss a story. Sign up for daily updates and the latest headlines.</p>
              <input value={name} onChange={e => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2.5 mb-2.5 bg-white text-stone-900 text-sm rounded-sm outline-none placeholder-stone-400" />
              <input value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
                className="w-full px-3 py-2.5 mb-3 bg-white text-stone-900 text-sm rounded-sm outline-none placeholder-stone-400" />
              <button onClick={handleSubmit}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2.5 rounded-sm text-sm transition-colors">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  const accent = categoryAccent[article.category] || "text-red-700 border-red-700";
  const bgColor = categoryBg[article.category] || "bg-red-700";
  return (
    <div className="bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
      <div className={`w-full h-48 ${bgColor} flex items-center justify-center text-5xl opacity-80 group-hover:opacity-100 transition-opacity`}>
        {article.emoji}
      </div>
      <div className="p-4">
        <span className={`text-xs font-bold uppercase tracking-wider border-b pb-0.5 ${accent}`}>
          {article.category}
        </span>
        <h3 className="font-bold text-stone-900 text-base mt-2 mb-2 leading-snug group-hover:text-red-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">{article.description}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-stone-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ article }) {
  const accent = categoryAccent[article.category] || "text-red-700 border-red-700";
  const bgColor = categoryBg[article.category] || "bg-red-700";
  return (
    <div className="bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer flex flex-col md:flex-row">
      <div className={`${bgColor} flex items-center justify-center text-6xl md:w-52 h-48 md:h-auto opacity-80 group-hover:opacity-100 transition-opacity shrink-0`}>
        {article.emoji}
      </div>
      <div className="p-5 flex flex-col justify-center">
        <span className={`text-xs font-bold uppercase tracking-wider border-b pb-0.5 ${accent} w-fit`}>
          {article.category}
        </span>
        <h3 className="font-bold text-stone-900 text-xl mt-2 mb-2 leading-snug group-hover:text-red-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed">{article.description}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-stone-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Homepage");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = ARTICLES.filter(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-100 font-serif">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <BreakingBar />
      <Hero />

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center px-4 pt-10 pb-2">
        <p className="text-stone-500 text-base leading-relaxed font-sans">
          Explore the latest stories, breaking news, and expert insights all in one place. At Pulse News, we bring the world to your fingertips — informing, inspiring, and empowering you every day.
        </p>
      </div>

      {/* Featured stories */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="font-extrabold text-stone-800 text-xl tracking-tight">Top Stories</h2>
          <div className="flex-1 h-px bg-stone-300" />
        </div>
        <div className="flex flex-col gap-4">
          {featured.map(a => <FeaturedCard key={a.id} article={a} />)}
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="font-extrabold text-stone-800 text-xl tracking-tight">Latest News</h2>
          <div className="flex-1 h-px bg-stone-300" />
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map(cat => (
            <button key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all font-sans ${
                activeCategory === cat
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-white text-stone-600 border-stone-300 hover:border-red-400 hover:text-red-700"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length > 0
            ? filtered.map(a => <ArticleCard key={a.id} article={a} />)
            : <p className="col-span-3 text-center text-stone-400 py-12 font-sans">No articles in this category.</p>
          }
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-sm font-sans">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M6 7h12M6 11h12M6 15h7" />
              </svg>
              <span className="text-white font-bold">PulseNews</span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed">Independent journalism for a complex world. Trusted by millions since 2026.</p>
          </div>
          <div className="flex gap-10 text-xs">
            <div>
              <p className="text-white font-semibold mb-2">Sections</p>
              {["World","Technology","Science","Business","Culture"].map(s => <p key={s} className="mb-1 hover:text-white cursor-pointer">{s}</p>)}
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Company</p>
              {["About","Contact","Careers","Advertise","Privacy"].map(s => <p key={s} className="mb-1 hover:text-white cursor-pointer">{s}</p>)}
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 text-center py-3 text-xs text-stone-600">
          © 2026 PulseNews. All rights reserved.
        </div>
      </footer>
    </div>
  );
}