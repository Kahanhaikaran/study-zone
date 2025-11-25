
import React from 'react';

const marqueeMessages = [
	"Assignments for every subject",
	"Original projects & viva decks",
	"Exam-ready handwritten notes",
	"Dissertations with expert mentoring",
	"Confidential & plagiarism-free",
	"On-time delivery, every time",
	"WhatsApp +91 73036 28683",
];

const renderStrip = (style_2: boolean) => (
	<div className="comm">
		<div></div>
		{marqueeMessages.map((message) => (
			<div className={`cmn-textslide ${style_2 ? "text-color-2" : ""}`} key={message}>
				<i className="flaticon-mortarboard"></i> {message}
			</div>
		))}
	</div>
);

const MarqueeOne = ({style_2} : any) => {
  return (
    <> 
       <div className="marquee-section style-header">
            <div className={`mycustom-marque  ${style_2 ? "theme-green-bg-1" : "header-marque theme-blue-bg"}`}>
                <div className="scrolling-wrap">
                    {renderStrip(style_2)}
                    {renderStrip(style_2)}
                    {renderStrip(style_2)}
                </div>
            </div>
        </div>
    </>
  );
};

export default MarqueeOne;