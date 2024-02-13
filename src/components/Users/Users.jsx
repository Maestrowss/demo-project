import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        {/*<div>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {*/}
        {/*            props.onPageChanged(p);*/}
        {/*        }}>{p} </span>*/}
        {/*    })}*/}
        {/*</div>*/}
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;