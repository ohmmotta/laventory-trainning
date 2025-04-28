import { useEffect, FormEventHandler } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'

export default function ForgotPassword() {
    return (
        <GuestLayout>
            <Head>
                <title>ลืมรหัสผ่าน</title>
                <meta name="description" content="Fogotpassword page description" />
            </Head>

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
                        ส่งลิงก์รีเซ็ตรหัสผ่าน
                    </button>
                </div>
            </form>
        </GuestLayout>
    )
}
