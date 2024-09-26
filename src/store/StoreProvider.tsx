'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    const store = makeStore()
    storeRef.current = store
    // @ts-expect-error: Assigning persistor to storeRef.current requires type assertion.
    storeRef.current.__persistor = persistStore(store)
  }

  return (
    <Provider store={storeRef.current}>
      {/* @ts-expect-error: Accessing __persistor property which lacks type definition. */}
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
