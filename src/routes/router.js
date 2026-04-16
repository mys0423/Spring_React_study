import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MemberList from '../pages/member/MemberList';
import MemberInfo from '../pages/member/MemberInfo';

const router = createBrowserRouter ([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path: "/members/member-info",
    element: <MemberInfo />
  },
])

export default router;