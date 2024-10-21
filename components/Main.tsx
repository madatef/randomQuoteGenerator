
'use client'
import Link from "next/link"
import Author from "./Author"
import { Quote } from "./Quote"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSquareThreads } from "@fortawesome/free-brands-svg-icons/faSquareThreads"
import { useState } from "react"
import { Bubble } from "./Bubble"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import $ from 'jquery'
import { fetchQuote } from "@/utils"
import Category from "./Category"



export let category = 'forgiveness'
export  const colors = [
	"#2d0087",
	"#017835",
	"#962c92",
	"#027341",
	"#bf2ebf",
	"#115435",
	"#463dc4",
	"#d18604",
	"#0089ff",
	"#870101",
	"#02a7c7",
	"#b5023f",
	"#019180",
	"#8c2222",
	"#013738",
	"#7a252d",
	"#006500",
	"#073801",
	"#5c2d18",
	"#2b0029",
	"#264211",
	"#84002f",
	"#1d4ed8",
	"#7c0000",
	"#003240",
	"#631a02",
	"#022622",
	"#733752",
	"#360019",
	"#7d016b"
];
export let myColor: string = colors[Math.floor(Math.random() * colors.length)];

export let currQuote:string = 'We forgive on the occasion of ourselves being free-minded of all the rage and anger, not on that of others deserving forgivness.';
export let currAuthor: string = 'Mohammad Atef';




const updateUI = async () => {
  let quoteObj = await fetchQuote(category);
  currQuote = quoteObj.quote;
  currAuthor = quoteObj.author;
  myColor = colors[Math.floor(Math.random() * colors.length)];
}


const Main = () => {

    const [quote, setQuote] =  useState(currQuote);
    const [author, setAuthor] = useState(currAuthor);


    const handleNextClick = async () => {
        await updateUI();
        setQuote(currQuote);
        setAuthor(currAuthor);
        if(currAuthor === 'some bug') {
          myColor = '#d44242'
          document.getElementById('twitter')?.classList.add('hidden');
          document.getElementById('threads')?.classList.add('hidden');
          document.getElementById('errorIcon')?.classList.remove('hidden');
          
        }
        else {
          document.getElementById('errorIcon')?.classList.add('hidden');
          document.getElementById('twitter')?.classList.remove('hidden');
          document.getElementById('threads')?.classList.remove('hidden');
          $('#quoteEl').animate({opacity: 0}, 400, function() {
            $(this).animate({opacity: 1}, 400);
          })
          $('#authorEl').animate({opacity: 0}, 400, function() {
            $(this).animate({opacity: 1}, 400);
          })
          
        }
        
    }

    function handleCatChange(e: React.FormEvent<HTMLSelectElement>) {
      category = e.currentTarget.value;
    }


  return (
    <main  id="wrapper" style={{transition: 'background-color 0.8s ease-in-out, color 0.8s ease-in-out', backgroundColor: myColor, color: myColor}} className='flex flex-col relative gap-2 place-items-start items-center ali justify-center  w-full h-screen'>
        <Category handleChange={handleCatChange} />
        <Bubble >
          <div className="flex flex-col w-full">
              <Quote id='quoteEl' currQuote={quote} />
              <FontAwesomeIcon id="errorIcon" icon={faExclamationCircle} className="hidden text-5xl lg:text-6xl" />
          </div>
          <div className="flex flex-col gap-2 items-end justify-between">

            <Author id='authorEl' currAuthor={author} />
            <div className="flex w-full justify-between md:mb-4 items-center">
                <div className="flex gap-2">
                    <Link 
                        id="twitter" 
                        target="_top" 
                        href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + "\n- " + author + "\n")} 
                    >
                    <FontAwesomeIcon icon={faSquareXTwitter} className="text-3xl rounded-[5px] lg:text-4xl" />
                    </Link>
                    <Link 
                        id="threads" 
                        target="_blank" 
                        href={'https://threads.net/intent/post?text=' + encodeURIComponent('"' + quote + '" ' + "\n- " + author + "\n")}
                    >
                    <FontAwesomeIcon icon={faSquareThreads} className="text-3xl rounded-[5px] lg:text-4xl" />
                    </Link>
                </div>
                <p> Category: {category}</p>
                <button id="nextBtn" type="button" style={{transition: 'background-color 0.8s ease-in-out' , backgroundColor: myColor}} onClick={handleNextClick} className='px-5 rounded-[5px] md:rounded-lg h-[26px] md:h-[40px] text-white font-roboto'>Next</button>
            </div>
          </div>
        </Bubble>
    </main>
  )
}

export default Main