import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MemberList from '../pages/member/MemberList';
import MemberInfo from '../pages/member/MemberInfo';
import MemberJoin from '../pages/member/MemberJoin';
import MemberLogin from '../pages/member/MemberLogin';
import PostWrite from '../pages/post/PostWrite';
import PostRead from '../pages/post/PostRead';
import PostList from '../pages/post/PostList';
import PostUpdate from '../pages/post/PostUpdate';

const router = createBrowserRouter ([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path: "/members/member-info/:id",
    element: <MemberInfo />
  },
  {
    path: "/members/member-join",
    element: <MemberJoin />
  },
  {
    path: "/members/member-login",
    element: <MemberLogin />
  },
  {
    path: "/posts/post-write",
    element: <PostWrite />
  },
  {
    path: "/posts/post-list",
    element: <PostList />
  },
  {
    path: "/posts/post-read",
    element: <PostRead />
  },
  {
    path: "/posts/post-read/:id",
    element: <PostRead />
  },
    {
    path: "/posts/post-update",
    element: <PostUpdate />
  },
])

export default router;