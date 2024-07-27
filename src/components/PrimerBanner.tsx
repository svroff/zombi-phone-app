import React from 'react';

interface PrimerBannerProps {
    imageUrl: string;
    altText: string;
}

const PrimerBanner: React.FC<PrimerBannerProps> = ({ imageUrl, altText }) => {
    return (
        <div className="banner-responsive">
            <img src={imageUrl} alt={altText} className="image-responsive"/>
        </div>
    );
};

export default PrimerBanner;