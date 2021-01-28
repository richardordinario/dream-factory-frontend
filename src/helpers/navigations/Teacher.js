export default [
    {
        header: 'MAIN',
        list: [
            {
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                route: '/dashboard'
            },
            {
                title: 'My Courses',
                icon: 'mdi-book',
                route: '/courses'
            },
            {
                title: 'My Students',
                icon: 'mdi-school',
                route: '/students'
            },
            {
                title: 'Forum',
                icon: 'mdi-comment-alert',
                route: 'Dashboard'
            },
        ]
    },
    {
        header: 'ACCOUNT',
        list: [
            {
                title: 'Messages',
                icon: 'mdi-comment-alert',
                route: 'Dashboard'
            },
            {
                title: 'My Account',
                icon: 'mdi-account',
                route: 'Dashboard'
            },
        ]
    }
]