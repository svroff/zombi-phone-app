import React from "react";

interface FooterContent {
    menu: React.ReactNode;
}

interface FooterProps {
    content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({content}) => {
    return (

        <footer className="flex justify-center p-6 bg-slate-300">
            <div className="flex justify-center w-full">
                <div>{content.menu}</div>
            </div>
        </footer>
    );

};

export default Footer;