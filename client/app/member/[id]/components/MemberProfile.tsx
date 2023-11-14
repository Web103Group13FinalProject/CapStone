import React from "react";
import { Member, Post } from '../../../../services/types';

interface MemberByIdProps {
    member: Member;
    posts: Post[];
}

const MemberProfile: React.FC<MemberByIdProps> = ({ member, posts }) => {
    
    
    
    return (
        <div id="MemberProfile">
            <div id="MemberProfileContainer">
                <div id="MemberBioContainer">
                    <div id="MemberBio">
                        <p id='MemberName'>Name: {member.name}</p>
                    </div>
                </div>
                <div id="MemberPostsContainer">
                    {posts.map((post: Post) => (
                        <div id="MemberPost" key={post.id}>

                        </div>
                    ))}
                </div>
            </div>
        <style>
            {`
                #MemberProfile {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #MemberProfileContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #MemberBioContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #MemberBio {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #MemberName {
                    font-size: 20px;
                    color: white;
                }
            `}
        </style>
        </div>
    )
};

export default MemberProfile;
