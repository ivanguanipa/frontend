import moment from 'moment';

export const dateFormat = (date:string, format:string)=>{
    return moment.utc(date).format(format);
};
