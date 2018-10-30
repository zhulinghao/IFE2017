import { remove } from 'lodash';
import { homeList } from '@/util/mock';
// import { homeService } from '@/services/HubService'
import ls from '@/services/LocalStorage';
const homeListName = 'home_list';

// 如果localstorage里面查不到数据，就把mock里面的数据存到 loaclstorage
if (!ls.Get(homeListName)) ls.Set(homeListName, homeList);

// homeService.getAll().then(res => {
//   console.log(res.status)
//   console.log(res.data);
// }).catch(err => console.log(err))

const website = (state = ls.Get(homeListName), action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const addItemResult = state.map(item => {
        if (item.type === action.data.type) {
          item.list = [ ...item.list, action.data.item ]
          return item;
        } else return item;
      })
      ls.Set(homeListName, addItemResult);
      return addItemResult;
    case 'DELETE_ITEM':
      const deleteItemResult = state.map(item => {
        if (item.type === action.data.type) {
          item.list = remove(item.list, (n) => {
            return n.id !== action.data.id;
          })
          return item;
        } else return item;
      })
      ls.Set(homeListName, deleteItemResult);
      return deleteItemResult;
    default:
      return state
  }
}
export default website