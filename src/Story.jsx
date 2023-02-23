import React from 'react'


const style = {
    card: `flex flex-col border-2 rounded-lg bg-zinc-200 basis-1/4 h-`,
    ul: `py-5`,
    li: ` flex flex-col items-center p-1`,   
    img: `object-contain h-24`
}

const Story = () => {
  return (
    <div className='flex gap-20 m-10 p-5 vh-80'>
        <div className='grid grid-cols-2 basis-1/2 justify-around gap-5'>
            <div className={style.card}>
                    <div className='p-5' >Skills </div>
                    <img className={style.img} src='/skills.png'/>
                        <ul className={style.ul}>
                            <li className={style.li}>Agile</li>
                            <li className={style.li}>PO Cert</li>
                        </ul>

            </div>

            <div className={style.card}>
                <div className='p-5' >Work Experience </div>
                    <img className={style.img} src='/work.png'/>
                        <ul className={style.ul}>                        
                            <li className={style.li}>Konecranes Product Owner</li>
                            <li className={style.li}>Konecranes Logistics and Purchasing Assistant</li>
                        </ul>
            </div>     
            <div className={style.card}>
                <div className='p-5' >Education</div>
                    <img className={style.img} src='/education.png'/>
                        <ul className={style.ul}>
                            <li className={style.li}>Jyväskylä University of Applied Sciences</li>
                            <li className={style.li}>Lukio</li>
                        </ul>
            </div>     
            <div className={style.card}>
                <div className='p-5' >Freetime</div>
                    <img className={style.img} src='/climbing.png'/>
                        <ul className={style.ul}>
                            <li className={style.li}>Web development</li>
                            <li className={style.li}>Climbing</li>
                        </ul>
            </div>  

        </div>
        <div>
            <div className='text-8xl basis-1/2'>

                Your guy for anything product related
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Story