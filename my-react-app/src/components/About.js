import React, { useState } from 'react'

export default (function About(props) {
    return (

        <div className="parent">
            <div className='container1'>
                <h2>FAQ'S</h2>
                <div className='container2'>
                    <div className='one'>
                        <div className="q1"><h3>What is this question 1?</h3><svg  onClick={(e)=>{props.togg(e.target)}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg></div>
                        <div className="answer">The Stone Age marks the earliest known period of human history, stretching from the first use of tools by hominins around 2.5 million years ago to the advent of metalworking around 3,000 BCE. It is divided into three distinct periods: the Paleolithic, Mesolithic, and Neolithic. During this era, humans made significant advancements in their tools, lifestyle, and culture.</div>
                    </div>


                    <div className='one'>
                        <div className="q2"><h3>What is this question 2?</h3><svg  onClick={(e)=>{props.togg(e.target)}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg></div>
                        <div className="answer">The Stone Age marks the earliest known period of human history, stretching from the first use of tools by hominins around 2.5 million years ago to the advent of metalworking around 3,000 BCE. It is divided into three distinct periods: the Paleolithic, Mesolithic, and Neolithic. During this era, humans made significant advancements in their tools, lifestyle, and culture.</div>
                    </div>

                    <div className='one'>
                        <div className="q3"><h3>What is this question 3?</h3><svg  onClick={(e)=>{props.togg(e.target)}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg></div>
                        <div className="answer">The Stone Age marks the earliest known period of human history, stretching from the first use of tools by hominins around 2.5 million years ago to the advent of metalworking around 3,000 BCE. It is divided into three distinct periods: the Paleolithic, Mesolithic, and Neolithic. During this era, humans made significant advancements in their tools, lifestyle, and culture.</div>
                    </div>

                </div>
            </div>

        </div>

    )
})
