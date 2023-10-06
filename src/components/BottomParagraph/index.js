import React from 'react'
import './paragraph.css';

const Paragraph = () => {
  return (
    <div className='paragraph-container'>
      <div className='first-paragraph'>
        <div className='first-Paragraph-p'>
        <p>Proudly seeded by <a href='/' className='text-underline'>Patamar Capital, </a> with Vulpes Investment Management as Singapore fund management partner.</p>
        <p>With support of the American People through the United States Agency for International Development (USAID).</p>
        <p>With support from <a href='/' className='text-underline'> Investing in Women, </a>  an initiative of the Australian Government, and <a href='/' className='text-underline'> Swiss EP </a>  an initiative of SECO Economic Cooperation and Development.</p>
        </div>
      </div>
      <div className='second-paragraph'>
        <div className='paragraph'>
        <p>Nothing on this website should be construed as an offer to sell or a solicitation of an offer to purchase any investments, securities or products or the giving of any advice in relation to any investments, securities or products in any jurisdiction where such offer or solicitation is not qualified or exempt from registration or permitted by law. The access, use and/or distribution of this website’s information, materials and contents may be restricted by law in certain jurisdictions. It is your sole responsibility to be made aware of and to fully comply with such restrictions.</p>
        <p>Patamar Beacon Pte. Ltd., Patamar Capital LLC and their respective affiliates or subsidiaries does not guarantee the accuracy or completeness of the information, materials and contents on this website and expressly disclaims liability for any errors in, or omissions from, such information, materials and contents or this website in general. Links to other websites from this website are for convenience only. You agree that your access, use and/or distribution of such other websites (including the information, materials and contents therein) is entirely at your own risk and subject to the terms and conditions of access, use and/or distribution contained therein.</p>
        </div>
      </div>
    </div>
  )
}

export default Paragraph