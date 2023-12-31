import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import { format } from "timeago.js";
import { Context } from "../../context/Context.js";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ data }) => {
  const [channel, setChannel] = useState({});
  const { user } = useContext(Context);
  // console.log(data);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/${data.userId}`);
      // console.log(res.data);
      setChannel(res.data);
    };
    fetchComment();
  }, [data.userId]);

  return (
    <Container>
      <Avatar
        src={
          user.profilePic
            ? user.profilePic
            : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
        }
      />
      <Details>
        <Name>
          {/* {channel.name} */}
          {channel.username}
          {/* <Date>{format(data.createdAt)}</Date> */}
        </Name>
        <Text>{data.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
