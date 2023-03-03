import React from 'react';
import IconsMenu from '../IconsMenu/IconsMenu';
import Search from '../Search/Search';
import EventsView from '../EventsView/EventsView';

const Main = () => {
    return (
        <div>
            <IconsMenu />
            <Search />
            <EventsView />
        </div>   
    )
}

export default Main;