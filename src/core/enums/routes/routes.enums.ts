enum RoutesEnum {
    Root = '/',
    ForgotPassword = '/forgot-password',
    ResetPassword = '/reset-password',
    Panel = '/panel' /* It navigates to ProfileSettings page */,
    Profile = Panel + '/profile' /* It navigates to ProfileOverview page */,
    ProfileOverview = Profile + '/overview',
    ProfileProjects = Profile + '/projects',
    ProfileGantt = Profile + '/gantt',
    ProfileActivity = Profile + '/activity',
    ProfileSettings = Profile + '/settings',
    Projects = Panel + '/projects' /* It navigates to ProjectsOverview page */,
    ProjectsOverview = Projects + '/overview',
    ProjectsTimeline = Projects + '/timeline',
    ProjectsTasks = Projects + '/tasks',
    ProjectsFiles = Projects + '/files',
    ProjectsUsers = Projects + '/users',
    ProjectsActivity = Projects + '/activity',
    ProjectsSettings = Projects + '/settings',
    AddProject = Projects + '/add-project',
    Users = Panel + '/users',
    /* UserDetailPage is a dynamic route ~~> Users + [id] + { UsersEdit | UsersPermission | UsersChangePassword | UsersActivationLogs | UsersLoginsLog } */
    UsersEdit = 'edit',
    UsersPermission = 'permission',
    UsersChangePassword = 'change-password',
    UsersActivationLogs = 'activation-logs',
    UsersLoginsLog = 'login-logs',

    /* UserDetailPage is a dynamic route ~~> Users + [id] */
    Areas = Panel + '/areas',
    /* AreaDetailPage is a dynamic route ~~> Areas + [id] */
    Aspects = Panel + '/aspects',
    AddAspects = Aspects + '/add-aspect',
    /* AspectSettings is a dynamic route ~~> Aspects + [id] + AspectSettings */
    AspectSettings = 'aspect-settings',
    /* AspectCheckList is a dynamic route ~~> Aspects + [id] + AspectCheckList */
    AspectCheckList = 'check-list',
    /* AspectRequirements is a dynamic route ~~> Aspects + [id] + AspectRequirements */
    AspectRequirements = 'requirements',
    Teams = Panel + '/teams',
}

export default RoutesEnum
