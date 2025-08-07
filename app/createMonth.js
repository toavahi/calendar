export default function create(date){
    let list = [' Mo Tu We Th Fr Sa Su'];
    if(date === '') return [];
    const y = parseInt(date.split("-")[0]);
    const m = parseInt(date.split("-")[1]);
    const vis = y % 4 == 0 && (y % 100 != 0 || y % 400 == 0);
    let start_point = new Date(y, m - 1, 7).getDay();
    let len = 0;
    switch(m){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            len = 31;
            break;
        case 2:
            len = vis ? 29 : 28;
            break;
        default:
            len = 30;
    }
    let temp_string = '';
    for(let i = 1; i < len + start_point + 1; i++){
            const day = i - start_point;
            temp_string += i > start_point ? (day < 10 ? "  " + (day).toString() : " " + (day).toString()) : "   ";
            if(i % 7 == 0 || i == len + start_point){
                list.push(temp_string);
                temp_string = '';
            }
    }
    return list;
}