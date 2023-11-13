import React from "react";
import '../globals.css'
import { Member, Post } from '../../../../services/types'

interface MemberByIdProps {
    member: Member;
    posts: Post[];
}

const MemberPage: React.FC<MemberByIdProps> = ({ member, posts }) => {
    return (
        <div id="MemberPage">
            <div id="MemberPageContainer">
                <div id="MemberCardContainer">
                    <div id="MemberCard">
                        <div id="MemberInformationContainer">
                            <p id='MemberName'>Name: {member.name}</p>
                        </div>
                    </div>
                </div>
                <div id="MemberPostsContainer">
                    {posts.map((post: Post) => (
                        <div id="MemberPost" key={post.id}>

                        </div>
                    ))}
                </div>
            </div>
        
        <style>{`
            #MemberPage {
                display: flex;
                position: relative;
                width: 99%;
                height: 100%;
            }
            #MemberPageContainer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
            #MemberCardContainer {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow-y: scroll;
            }
            #MemberCard {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 1000px;
                height: 400px;
                margin: 10px;
                border: 1px solid white;
            }
            #MemberInformationContainer {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100%;
            }
            #MemberName {
                font-size: 20px;
                color: white;
            }
        `}</style>
        </div>
    )
}

export default MemberPage;
