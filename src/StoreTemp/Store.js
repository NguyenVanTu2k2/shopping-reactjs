import { configureStore } from '@reduxjs/toolkit'

import  NotificationSlice  from './NotificationSlice'

export default configureStore({
  reducer: {
    Notification: NotificationSlice,
  },
})