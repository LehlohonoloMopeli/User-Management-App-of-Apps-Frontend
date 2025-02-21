import { A } from "@solidjs/router"


export default function Website() {
    return (
        <div class="w-full flex flex-col mt-10">
            <div class="flex justify-center">
                <h1 class="text-3xl font-bold text-gray-900">Welcome to App of Apps</h1>
            </div>

            <div class="rounded-sm flex justify-end mr-40 mt-5">
                <nav class="flex justify-between p-4 bg-sky-500 text-white rounded-full">
                    <A href="/login" class="mr-4 hover:underline">Login</A>
                    <A href="/register" class="hover:underline">Register</A>
                </nav>
            </div>
        </div>
    );
}
