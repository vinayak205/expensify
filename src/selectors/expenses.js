import moment from 'moment';

export default (expenses, filters) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textFilter = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        const startDateFilter = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateFilter = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        return textFilter && startDateFilter && endDateFilter;
    }).sort((a, b) => {
        if (filters.sortBy === 'amount') {
        return a.amount > b.amount ? -1 : 1;
        }

        return a.createdAt > b.createdAt ? -1 : 1;
    });
};