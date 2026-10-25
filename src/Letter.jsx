import './letter.css'
import art from './assets/final.png'


export default function Letter() {

    return (
        <>
            <div className='paper'>
                <p>
                    my dearest rye, 
                    <br /><br />
                    happy 21st birthday! 
                    <br /><br />
                    rye, with all honesty, i don't have all the right words as i write this letter. there are so many lovely things about you, so many wishes we all hope to come true, and so many memories with you to look back on. but, perhaps, i would like to celebrate this day for what it actually is: a proof of how far you've come.
                    <br /><br />
                    rye, nakita ko halos lahat ng pinagdaanan mo. i have loved you since we were sixteen, and i had witnessed everything that matters. 
                    <br /><br />
                    i had witnessed you cry and heard you laugh the exact same way. i had seen your heart break, seen you lose people, and watched you grieve. i had seen you love, and i had seen you let go. i had seen you choose yourself, and i had seen you make sacrifices. i had seen you give others grace, and yourself a little bit more. i had seen you choose kindness; i had seen you forgive. i had seen you make new friends, and i had seen you long for your old ones. i had seen you fight for what you want, and i had seen you get them. i had seen you lose everything, and i have watched you stand back up.
                    <br /><br />
                    rye, through this birthday message, i want to remind you of how strong you are and how far you've truly come. sa lahat ng dugo, pawis, at luha na ipinatak mo, saksi ako sa kabuluhan ng mga ito. 
                    <br /><br />
                    at kung maaari akong humiling: sana sa kaarawan mong ito ay makapagbigay pugay ka sa mga lumang bersyon mong silang sanhi kung paano at bakit ka narito. 
                    <br /><br />
                    nawa'y maunawaan mong nakahantong ka rito dahil naniwala ka. na sa kabila ng lahat ay nagpatuloy ka; bumangon, nagtiwala, nakibaka.
                    <br /><br />
                    nawa'y naiintindihan mo kung gaano kaimportante ang araw na ito.<br />
                    masaya akong narito ka, rye. masaya kami. lahat kami.
                    <br /><br />
                    rye, mas maganda ang mundo, mas malambot ang huni ng mga sining, mas magara ang langit, mas mahinay ang mga ulap, at mas mahalimuyak ang mga bulaklak, dahil narito ka :)
                    <br /><br />
                    mahal na mahal kita. <br />
                    mahal na mahal ka namin.
                    <br /><br />
                    maligayang kaarawan, ryepot.
                </p>
            </div>

            <a
                href={art}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img src={art} className='art' onClick={() => {}}/>
            </a>
            
        </>
        
    )
}