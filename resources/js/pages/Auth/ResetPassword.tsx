import { useEffect, FormEventHandler } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'

export default function ResetPassword() {
    return (
        <GuestLayout>
            <Head>
                <title>รีเซ็ตรหัสผ่าน</title>
                <meta name="description" content="Reset password page description" />
            </Head>

            <div className="mb-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">รีเซ็ตรหัสผ่าน</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">กำหนดรหัสผ่านใหม่สำหรับบัญชีของคุณ</p>
            </div>

            <form>
                <div>
                    <InputLabel htmlFor="email" value="อีเมล" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        className="mt-1 p-2 block w-full"
                        autoFocus
                    />

                    <InputError message="This field is required" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor='password' value='รหัสผ่านใหม่'/>
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
                    <InputLabel htmlFor='password_confirmation' value='ยืนยันรหัสผ่านใหม่'/>
                    <TextInput
                    id='password_confirmation'
                    type='password'
                    name='password_confirmation'
                    value='******'
                    className="mt-1 p-2 block w-full"
                    />
                    <InputError message='This field is required' />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href="/login"
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        กลับไปหน้าเข้าสู่ระบบ
                    </Link>

                    <button 
                        type="submit" 
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        รีเซ็ตรหัสผ่าน
                    </button>
                </div>
            </form>
        </GuestLayout>
    )
}
