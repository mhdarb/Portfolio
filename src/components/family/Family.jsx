import { familyData } from '../../data';
import FamilyMember from '../familyMember/FamilyMember';
import './family.scss';

export default function Family() {
    const familyMembers = familyData.map(person => <FamilyMember member={person}/> )
    return (
        <div className="family">
            <div className="container">
                <div className="top">
                    {familyMembers[0]}
                    {familyMembers[1]}
                </div>
                <div className="center">
                    {familyMembers[4]}
                </div>
                <div className="bottom">
                    {familyMembers[2]}
                    {familyMembers[3]}
                </div>
            </div>
        </div>
    )
}
