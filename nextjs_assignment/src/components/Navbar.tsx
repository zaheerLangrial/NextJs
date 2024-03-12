import { ArrowIcon, Furom, Logo, ManIcon, SearchIcon, Sponer } from "@/utils/icons"


function Navbar() {
  return (
    <div className="flex items-center justify-between text-xs p-5">
        <div>
            {Logo}
        </div>
        <ul className="flex gap-5 font-extrabold">
            <li>FIGHTS</li>
            <li className="flex gap-1 items-center">SCOURCARDS {ArrowIcon}</li>
            <li>LEGACY MEDIA</li>
            <li>HISTORY OF BOXING</li>
            <div className="border"/>
            <li>ARCHIVE</li>
            <li>NEWS</li>
            <li>FIGHTERS</li>
            <li>GYM FINDER</li>
        </ul>
        <div className="flex gap-5 font-extrabold">
            <button className="flex gap-1 items-center">
                {Sponer} SPONSOR
            </button>
            <button className="flex gap-1 items-center">
                {Furom} FUROM
            </button>
            <button className="flex gap-1 items-center">
                {SearchIcon}
            </button>
            <button className="flex gap-1 items-center bg-red-600 rounded-md p-5">
                {ManIcon} MY ACCOUNT
            </button>
        </div>
    </div>
  )
}

export default Navbar