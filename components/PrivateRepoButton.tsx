"use client"
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Lock} from "lucide-react";

export function PrivateRepoButton({projectTitle} : {projectTitle: string}){
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()

    return (
        <>
            <button
                onClick={()=> setShowModal(true)}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded px-3 py-1.5 transition-colors"
            >
                <Lock className="w-4 h-4" /> Private
            </button>
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md mx-4 text-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <Lock className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Private Repository</h3>
                        <p className="text-gray-400 mb-6">
                            This is a private production codebase. Feel free to reach out to discuss the architecture or request access.
                        </p>
                        <button
                            onClick={() => {
                                setShowModal(false)
                                router.push(`/contact?subject=Repository Access Request - ${projectTitle}`)
                            }}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg transition-colors"
                        >
                            Request Access
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}