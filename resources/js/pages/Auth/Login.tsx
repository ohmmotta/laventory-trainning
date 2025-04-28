import { useEffect, FormEventHandler } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'

export default function Login() {
  return (
    <GuestLayout>
        <Head>
            <title>Login</title>
            <meta name="description" content="Login page description" />
        </Head>

        <form>

            <div>
                <InputLabel htmlFor='email' value='อีเมล์'/>
                <TextInput
                  id='email'
                  type='email'
                  name='email'
                  value='demo@email.com'
                  className="mt-1 p-2 block w-full"
                />
                <InputError message='This field is required' />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor='password' value='รหัสผ่าน'/>
                <TextInput
                  id='password'
                  type='password'
                  name='password'
                  value='******'
                  className="mt-1 p-2 block w-full"
                />
                <InputError message='This field is required' />
            </div>

            <div className="flex items-center justify-between mt-4 mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">จดจำฉัน</span>
              </label>
              <Link
                href="/forgotpassword"
                className="text-sm text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ลืมรหัสผ่าน?
              </Link>
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-end mt-4">
              <Link
                href="/register"
                className="text-sm text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
              >
                ลงทะเบียน
              </Link>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4 hover:cursor-pointer"
              >
                เข้าสู่ระบบ
              </button>

            </div>

        </form>
    </GuestLayout>
  )
}