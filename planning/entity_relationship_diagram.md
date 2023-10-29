# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

Table Users {
  UserID int [pk, increment]
  Username varchar(255)
  Password varchar(255)  // Remember, in real-life, hash the passwords
  ProfilePicture varchar(255)
  Bio text
}

Table Posts {
  PostID int [pk, increment]
  Content text
  Timestamp timestamp [default: 'CURRENT_TIMESTAMP']
  UserID int [ref: > Users.UserID]
}

Table Comments {
  CommentID int [pk, increment]
  Content text
  Timestamp timestamp [default: 'CURRENT_TIMESTAMP']
  UserID int [ref: > Users.UserID]
  PostID int [ref: > Posts.PostID]
}

Table Likes {
  LikeID int [pk, increment]
  UserID int [ref: > Users.UserID]
  PostID int [ref: > Posts.PostID]
}

Table Accounts {
  AccountID int [pk, increment]
  Email varchar(255)
  CreationDate date [default: 'CURRENT_DATE']
  UserID int [ref: > Users.UserID]
}

Table ExternalPlatforms {
  PlatformID int [pk, increment]
  PlatformName varchar(255)
}

Table PostShares {
  ShareID int [pk, increment]
  PostID int [ref: > Posts.PostID]
  PlatformID int [ref: > ExternalPlatforms.PlatformID]
  UserID int [ref: > Users.UserID]
}


## Add the Entity Relationship Diagram

![Alt text](<Screenshot 2023-10-29 at 5.45.50 PM-1.png>)
