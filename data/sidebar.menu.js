const sidebarItems = [
    { title: "Dashboard", route: "", icon: "mdi-apps", },
    { title: "News", route: "news", icon: "mdi-email-newsletter" },
    { title: "Vacancies", route: "vacancy", icon: "mdi-playlist-plus" },
    { title: "Advertisement", route: "advertisement", icon: "mdi-bell-badge", },
    { title: "Tender", route: "tender", icon: "mdi-playlist-edit", },
    { title: "Archives", route: "archives", icon: "mdi-archive", },
    {
        title: "Human Resource", route: "hr", icon: "mdi-account-group-outline",
        children: [
            { title: "Employees", route: "employees", },
            { title: "Recruitment", route: "recruitment" },
            { title: "Attendance", route: "attendance" },
            { title: "Workflows", route: "workflows" },
            { title: "Training and Workflows", route: "training" },
            { title: "Benefits Administration", route: "benefits" },
            { title: "Compensations", route: "compensations" },
            { title: "Onboarding", route: "onboarding" },
            { title: "Positions Control", route: "positions" },
            { title: "Time and Labour", route: "time-labour" },
            { title: "Payroll Processing", route: "payroll" }
        ],
    },
    { title: "Finance", route: "finance", icon: "mdi-finance" },
    { title: "Inventories", route: "inventory", icon: "mdi-folder-table" },
    {
        title: "Digital Marketing", icon: "mdi-account-switch",
        children: [
            { title: "Campaign", route: "campaign", },
            { title: "Email and SMS", route: "message" },
        ],
    }, {
        title: "Reports",
        icon: "mdi-finance",
        children: [
            { title: "Interview Reports", route: "interview-ads" },
            { title: "Google Ads", route: "google-ads", },
            { title: "Linkedin Ads", route: "linkedin-ads" },
            { title: "Facebook Ads", route: "facebook-ads" },
            { title: "Email Reports", route: "email-reports" },
            { title: "Call Reports", route: "call-reports" },
            { title: "Appointment Reports", route: "appointment-report" },
        ],
    },
    {
        title: "Schedule",
        icon: "mdi-seat",
        route: "schedule",
        children: [
            { title: "Calendar", route: "calendar" },
            { title: "Appointment", route: "appointment" },
        ],
    },
    {
        title: "Integrations",
        icon: "mdi-animation",
        children: [
            { title: "Google Analytics", route: "ganalytics" },
            { title: "Google Ads", route: "google-ads" },
            { title: "Google My Business", route: "gmb" },
            { title: "Google Contacts", route: "gc" },
            { title: "Google Calendar", route: "gcal" },
            { title: "Gmail", route: "gmail" },
            { title: "Google Drive", route: "gdrive" },
            { title: "Salesforce", route: "salesforce" },
            { title: "Facebook Ads", route: "fads" },
            { title: "Instagram", route: "instagram" },
            { title: "Linkedin", route: "linkedin" },
            { title: "Twitter", route: "twitter" },
            { title: "MailChimp", route: "mail-chimp" },
        ],
    },
    {
        title: "Settings",
        icon: "mdi-cog",
    },
]
export default sidebarItems