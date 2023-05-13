import { logo } from '../assets';

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center 
    items-center flex-col"
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/webdevhrithik')}
          className="black_btn"
        >
          GIthub
        </button>
      </nav>

      <h1 className="head_text">
        Short and Sweet: Let AI Summarize Your Reads! with{' '}
        <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4 </span>
      </h1>
      <h2 className="desc">
        Advanced AI to quickly provide accurate and concise summaries of
        articles, saving you time and effort. No more tedious reads, just short
        and sweet summaries that give you the information you need without the
        fluff. Give it a try and see the power of our article summarization
        technology!
      </h2>
    </header>
  );
};

export default Hero;
