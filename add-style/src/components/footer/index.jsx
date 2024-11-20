import React from 'react';
import '../../assets/styles/footer.css'
import FooterIcons from './footerIcon';
const Footer = ()=>{
    return (
        <footer className='mx-[6px] my-[6px] border-double border-4 border-primary '>
            <div className='flex w-full justify-center'>
                <h5>Address:</h5>
                <input type="text" placeholder='My address...' className= 'w-full border-2 border-primary rounded-full w-[23rem] pl-[10px] mr-[40px]' />
                <button className='border-2 border-primary rounded-full w-[7rem] hover:bg-secondary hover:text-slate-100'>submit</button><FooterIcons/>
                
            </div>
            
        </footer>
    )
}
export default Footer