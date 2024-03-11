import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const articles = [
  {
    id: 'article1',
    section: 'Crime',
    title: 'OPP, Canadian Anti-Fraud Centre, U.S. Secret Service stop $615K spear-phishing fraud',
    summary: 'The Canadian business is “well positioned to recover the funds.”',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/toronto.com/content/tncms/assets/v3/editorial/2/d1/2d13aa4e-05d6-5f92-8533-38a18e9d5acd/65d48e7574b6a.image.jpg?crop=621%2C622%2C315%2C769&resize=200%2C200&order=crop%2Cresize',
    altText: 'Image description for article 1',
    link: '/news/crime/opp-canadian-anti-fraud-centre',
    date: 'Feb 27, 2024',
    readTime: '1 min to read',
  },
  {
    id: 'article2',
    section: 'Crime',
    title: '3 teens arrested after display cases smashed, jewelry grabbed from Oshawa Centre store: police',
    summary: 'Details on the recent arrest of three teenagers involved in a jewelry theft.',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/toronto.com/content/tncms/assets/v3/editorial/2/d1/2d13aa4e-05d6-5f92-8533-38a18e9d5acd/65d48e7574b6a.image.jpg?crop=621%2C622%2C315%2C769&resize=200%2C200&order=crop%2Cresize',
    altText: 'Image description for article 2',
    link: '/news/crime/3-teens-arrested',
    date: 'Mar 1, 2024',
    readTime: '2 min to read',
  },
  {
    id: 'article3',
    section: 'Crime',
    title: 'OPP, U.S. Homeland Security make historic record-breaking weapons bust',
    summary: 'Charges have been laid against individuals from various municipalities in a historic weapons bust.',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/toronto.com/content/tncms/assets/v3/editorial/2/d1/2d13aa4e-05d6-5f92-8533-38a18e9d5acd/65d48e7574b6a.image.jpg?crop=621%2C622%2C315%2C769&resize=200%2C200&order=crop%2Cresize',
    altText: 'Image description for article 3',
    link: '/news/crime/opp-us-homeland-security-weapons-bust',
    date: 'Mar 3, 2024',
    readTime: '3 min to read',
  },
  {
    id: 'article4',
    section: 'Crime',
    title: 'Canada has a car theft epidemic. Here are simple ways to protect your vehicle',
    summary: 'Experts break down simple methods to thwart most car thieves amid an auto theft epidemic.',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/toronto.com/content/tncms/assets/v3/editorial/2/d1/2d13aa4e-05d6-5f92-8533-38a18e9d5acd/65d48e7574b6a.image.jpg?crop=621%2C622%2C315%2C769&resize=200%2C200&order=crop%2Cresize',
    altText: 'Image description for article 4',
    link: '/news/crime/canada-car-theft-epidemic',
    date: 'Mar 5, 2024',
    readTime: '2 min to read',
  },
  {
    id: 'article5',
    section: 'Crime',
    title: 'Peel police charge two men in rash of armed robberies at convenience stores across the GTA',
    summary: 'A series of armed robberies have been linked to two individuals, now facing multiple charges.',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/toronto.com/content/tncms/assets/v3/editorial/2/d1/2d13aa4e-05d6-5f92-8533-38a18e9d5acd/65d48e7574b6a.image.jpg?crop=621%2C622%2C315%2C769&resize=200%2C200&order=crop%2Cresize',
    altText: 'Image description for article 5',
    link: '/news/crime/peel-police-armed-robberies',
    date: 'Mar 7, 2024',
    readTime: '1 min to read',
  }
  // Add more articles as needed
];
const page = () => {
  return (
    <div className='overflow-auto h-[90vh]'>
      <div className='flex items-center justify-center'>
      <h1 className='text-2xl font-bold'>Safety & Criminal Info</h1>
      </div>
      <Image
        src="/safeinfo.jpg"
        alt="safe"
        width={1400}
        height={1000}
      />

      <div className='flex items-center justify-center'>
      <h1 className='text-2xl font-bold'>Safe News</h1>
      </div>
      <div>
      <Image
        src="/news.jpg"
        alt="safe"
        width={1400}
        height={3000}
      />
      </div>

    </div>
  )
}



export default page