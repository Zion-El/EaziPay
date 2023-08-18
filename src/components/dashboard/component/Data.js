import ComplianceIcon from '../dash-assets/compliances.png'
import LoanIcon from '../dash-assets/loan.png'
import SalaryIcon from '../dash-assets/salary.png'
import EmployeeIcon from '../dash-assets/employee.png'



export const card_data = [
    {
        icon: EmployeeIcon,
        value: 'Add Employee',
        color: '#FFEDEC'
    },
    {
        icon: SalaryIcon,
        value: 'Pay Salary',
        color: '#F0F7EB'
    },
    {
        icon: ComplianceIcon,
        value: 'Pay Compliances',
        color: '#E0F8EA'
    },
    {
        icon: LoanIcon,
        value: 'Quick Loan',
        color: '#EDF5FF'
    },
]

export const accordion = [
    {
        icon: '',
        title: 'Employee Management',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },
    {
        icon: '',
        title: 'Payroll',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },
    {
        icon: '',
        title: 'Compliance',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },
    {
        icon: '',
        title: 'Quick Loan',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },
    {
        icon: '',
        title: 'Book Keeping',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },
]
export const setting = [
    {
        icon: '',
        title: 'Setting',
        children: [
            {
                head:'Item 1',
                link:'',
            },
            {
                head:'Item 2',
                link:'',
            },
            {
                head:'Item 3',
                link:'',
            },
        ]
    },

]

export const activity_stat =[
    {
        date: 'Wednesday, November 09, 2022',
        transaction: [
            {
                cat:'PAYROLL',
                full_name: 'Badmus Kemis',
                activity: 'Paid November 2022 salary',
                amount: '',
                employee: 52,
                bonus_name: '',
                time:'16:15',
            },
            {
                cat:'BONUS',
                full_name: 'Badmus Kemis',
                activity: 'Added new bonus',
                amount: '',
                employee: '',
                bonus_name: 'XMAS Bonus',
                time:'16:15',
            },
        ]
    },
    {
        date: 'Friday, November 04, 2022',
        transaction: [
            {
                cat:'PAYROLL',
                full_name: 'Badmus Kemis',
                activity: 'Paid November 2022 salary',
                amount: '',
                employee: 52,
                bonus_name: '',
                time:'16:15',
            },
            {
                cat:'EMPLOYEE MANAGEMENT',
                full_name: 'Badmus Kemis',
                activity: 'Added new employee',
                amount: '',
                employee: 52,
                bonus_name: '',
                time:'16:15',
            },
            {
                cat:'WALLET',
                full_name: 'Badmus Kemis',
                activity: 'Paid November 2022, salary',
                amount: 'N11,1678,900.00',
                employee: '',
                bonus_name: 'XMAS Bonus',
                time:'16:15',
            },
        ]
    },
    {
        date: 'Monday, September 09, 2022',
        transaction: [
            {
                cat:'PAYROLL',
                full_name: 'Badmus Kemis',
                activity: 'Paid November 2022 salary',
                amount: '',
                employee: 52,
                bonus_name: '',
                time:'16:15',
            }
        ]
    },
    {
        date: 'Thursday, June 09, 2022',
        transaction: [
            {
                cat:'PAYROLL',
                full_name: 'Badmus Kemis',
                activity: 'Paid November 2022 salary',
                amount: '',
                employee: 52,
                bonus_name: '',
                time:'16:15',
            }
        ]
    },
]