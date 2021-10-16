import './familyMember.scss';
export default function FamilyMember(props) {
    console.log(props);
    return (
        <div className="familyMember">
            <span className="familyMemberRelation">{props.member.relation}</span>
            <div className="familyMemberInfo">
                <h3 className="familyMemberName">{props.member.name}</h3>
                <h4 className="familyMemberProfession">{props.member.profession}</h4>
            </div>
            <div className="education">
                <h4 className="education">{props.member.education}</h4>
            </div>
        </div>
    )
}
