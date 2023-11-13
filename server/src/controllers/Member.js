import { db } from '../db.js'

class MemberController {
    async getAllMembers(req,res){
        try {
            const members = await db.manyOrNone("SELECT * FROM member")
            return res.json(members);
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "Error occured when fetching all the users"})
        }
    }

    async getMembersById(req, res){
        const id = req.params.id
        try {
            const member = await db.one(`SELECT * FROM member WHERE id = ${id}`)
            return res.json(member)
        }
        catch(error) {
            console.log(error)
            return res.status(500).json({error: "Error Occured when fetching member by id"})
        }
    }

    createMember(req, res, data){
        const member = data
        if(
            (typeof member.id === number || typeof member.id === null) &&
            typeof member.username === 'string' &&
            typeof member.password === 'string' &&
            typeof member.first_name === 'string' &&
            typeof member.last_name === 'string'
        ){
            db.none('INSERT INTO member (username, password, first_name, last_name) VALUES ($1, $2, $3, $4)', [member.username, member.password, member.first_name, member.last_name])
            .then(() => {
                console.log("Member Created")
            })
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            console.log("Invalid data provided. Please check your input.");
        }
    }

    updateMemberById(req, res, data){
        const id = req.params.id
        const member = data
        if(
            (typeof member.id === number || typeof member.id === null) &&
            typeof member.username === 'string' &&
            typeof member.password === 'string' &&
            typeof member.first_name === 'string' &&
            typeof member.last_name === 'string'
        )
        {
            db.none('UPDATE member SET username = $1,  password = $2, first_name = $3, last_name = $4 WHERE id = $5', [member.username, member.password, member.first_name, member.last_name, id])
            .then(() => {
                console.log("Member Info Updated")
            })
            .catch((error) => {
                console.log("error")
            })
        }
        else{
            console.log("Invalid data provided. Please check your input.");
        }
    }

    deleteMemberById(req, res){
        const id = req.params.id
        db.none('DELETE FROM member WHERE id = $1 ', id)
        .then(() => {
            res.status(200).json({message: "Member deleted"})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({error: "error occured when deleting member"})
        })
    }

}

export { MemberController };