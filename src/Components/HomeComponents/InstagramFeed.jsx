import React from 'react';
import { FiInstagram, FiHeart, FiMessageCircle, FiExternalLink } from 'react-icons/fi';
import insta1 from "../../assets/images/insta1.jpeg";
import insta2 from "../../assets/images/insta2.jpeg";
import stats from "../../assets/images/stats.jpeg";


// Yahan aap UPEMA Instagram account ke actual posts ke images aur captions laga sakte hain
const instaPosts = [
  {
    id: 1,
    image:insta1,
    likes: '342',
    comments: '48',
    caption: 'Grand inauguration ceremony of UPEMA at Lucknow! Empowering UP Event Industry. 🏛️✨',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 2,
    image: insta2,
    likes: '289',
    comments: '31',
    caption: 'State-wide masterclass on event stage rigging & electrical safety benchmarks.',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 3,
    image: stats,
    likes: '415',
    comments: '56',
    caption: 'Purvanchal luxury wedding & floral decor exhibition at Varanasi.',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    likes: '520',
    comments: '64',
    caption: 'Executive meeting on single-window permissions and trade advocacy across UP.',
    link: 'https://www.instagram.com/upemaofficial/'
  }
];

const InstagramFeed = () => {
  return (
    // <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/70">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Profile Tag */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#1279CF] border border-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
            <FiInstagram className="w-4 h-4" />
            <span>@upemaofficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Follow Our <span className="text-[#1279CF]">Instagram Buzz</span>
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Catch backstage glimpses, event summits, and fraternity highlights from across Uttar Pradesh.
          </p>

          {/* Direct Profile Link Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/upemaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FiInstagram className="w-4 h-4" />
              <span>Follow @upemaofficial</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-200 block"
            >
              {/* Post Picture */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Dark Overlay with Stats & Icon */}
              <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <FiInstagram className="w-8 h-8 text-[#FCAF45] mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                
                <div className="flex items-center gap-4 text-xs font-bold mb-2">
                  <span className="flex items-center gap-1">
                    <FiHeart className="fill-white w-3.5 h-3.5" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMessageCircle className="fill-white w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>

                <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
              </div>

              {/* Instagram Mini Badge */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:opacity-0 transition-opacity">
                <FiInstagram className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;