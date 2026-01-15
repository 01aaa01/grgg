import { EmployeeCard } from './EmployeeCard'

export const EmployeeContent = () => {
  return (
    <div className="container">
      <div className="border my-10 grid grid-cols-2 gap-5 p-5 shadow-lg rounded-2xl">
          <EmployeeCard workName='Dasturchi' age={12} fullName='Abdunnur Musaxonov' hobbi='AI Video Creator' image='/images/abdunnur.png' />
          <EmployeeCard workName='Dasturchi' age={12} fullName='Usmon Nurmuhamedov' hobbi='-' image='/images/usmon.png' />
          <EmployeeCard workName='Dasturchi' age={14} fullName="Biloliddin G'ayratov" hobbi='Football' image='/images/biloliddin.png' />
          <EmployeeCard workName='Dasturchi' age={14} fullName='Rahmadjonov Ahmadjon' hobbi='-' image='/images/ahmadjon.png' />
          <EmployeeCard workName='Dasturchi' age={13} fullName='Ibrohim Zikrullayev' hobbi='Football' image='/images/ibrohim.png' />
          <EmployeeCard workName='Dasturchi' age={11} fullName='Muhammadimron Doniyorov' hobbi='Roblox game' image='/images/imron.png' />
          <EmployeeCard workName='Dasturchi' age={12} fullName='Akbarshox Ilhomov' hobbi='Play game' image='/images/akbarshox.png' />
      </div>
    </div>
  )
}
