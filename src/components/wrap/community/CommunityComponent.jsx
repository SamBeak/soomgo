import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommunityHeaderComponent from './community_component/CommunityHeaderComponent'
import CommunityAllComponent from './community_component/CommunityAllComponent'
import CommunityQuestionComponent1 from './community_component/CommunityQuestionComponent1'
import CommunityHowMuchComponent1 from './community_component/CommunityHowMuchComponent1'
import CommunityTogetherComponent1 from './community_component/CommunityTogetherComponent1'
import CommunityFindComponent1 from './community_component/CommunityFindComponent1'
import ComWriteComponent from './community_component/ComWriteComponent'
import ComViewListComponent from './community_component/ComViewListComponent'
import ComUpdateComponent from'./community_component/ComUpdateComponent' 
export default function CommunityComponent() {
  

  return (
    <div id="community">
         <Routes>
            <Route path='community/*' element={<CommunityHeaderComponent />}/>
                <Route index element={<CommunityHeaderComponent/>}/>
                <Route path='write' element={<ComWriteComponent/>}/>
                <Route path='view' element={<ComViewListComponent/>}/>
                <Route path='update' element={<ComUpdateComponent/>}/>
                <Route path='view/:id' element={<ComViewListComponent/>}/>
                
          </Routes>
    </div>  
  )
}
