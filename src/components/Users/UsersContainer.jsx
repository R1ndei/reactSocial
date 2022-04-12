import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

//Передает нужный нашей users компоненте state
let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress,
        }
    )
}
//
//Передает в компоненту коллбеки для ограничения взаимодействия компоненты с BLL
// let mapDispatchToProps = (dispatch) => {
//     return ({
//             //непосредственно коллбеки
//             follow: (userId) => {
//                 dispatch(followAC(userId))
//             },
//             unfollow: (userId) => {
//                 dispatch(unfollowAC(userId))
//             },
//             setUsers: (users) => {
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (pageNumber) => {
//                 dispatch(setCurrentPageAC(pageNumber))
//             },
//             setTotalUsersCount: (totalCount) => {
//                 dispatch(setTotalCountAC(totalCount))
//             },
//             toggleIsFetching: (isFetching) => {
//                 dispatch(toggleIsFetchingAC(isFetching))
//             },
//         }
//     )
// }
//непосредственно коллбеки
//

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);