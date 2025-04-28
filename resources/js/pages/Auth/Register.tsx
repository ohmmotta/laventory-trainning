import { useEffect, FormEventHandler } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'

export default function Register() {
  return (
    <GuestLayout>
        <Head>
            <title>Register</title>
            <meta name="description" content="Register page description" />
        </Head>

        <form>

          <div>
                <InputLabel htmlFor='name' value='ชื่อ'/>
                <TextInput
                  id='name'
                  type='text'
                  name='name'
                  value='Samit'
                  className="mt-1 p-2 block w-full"
                />
                <InputError message='This field is required' />
            </div>

            <div className="mt-4">
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

            <div className="mt-4">
                <InputLabel htmlFor='password_confirmation' value='ยืนยันรหัสผ่าน'/>
                <TextInput
                  id='password_confirmation'
                  type='password'
                  name='password_confirmation'
                  value='******'
                  className="mt-1 p-2 block w-full"
                />
                <InputError message='This field is required' />
            </div>

            {/* Register Button */}
            <div className="flex items-center justify-end mt-4">
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
              >
                มีบัญชีอยู่แล้ว เข้าสู่ระบบ
              </Link>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
              >
                ลงทะเบียน
              </button>

            </div>

        </form>
    </GuestLayout>
  )
}