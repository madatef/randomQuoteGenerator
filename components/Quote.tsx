'use client'

import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Quote = ({
  children, currQuote, id
}: Readonly<{
  children?: React.ReactNode;
  currQuote: string;
  id?: string;
}>) => {
  return (
    <div id={id} style={{animation: 'fade-in 1s ease-in-out'}} className="flex items-start justify-between gap-1 w-full">
        <div className="flex flex-col h-full">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-lg pr-1 md:pr-4 lg:text-3xl" />
        </div>

        <div className="flex justify-between align-bottom w-full h-full">
          <span id="quoteTxt" className="font-dancing my-[10px] text-xl lg:pt-2 text-justify h-full">
              {currQuote}
          </span>
          <div className="flex flex-col justify-end ml-[5px]">
            <FontAwesomeIcon icon={faQuoteRight} className="text-lg pl-1 mr-[1px] md:pl-4 lg:text-3xl" />
          </div>
        </div>
    </div>
  )
}
