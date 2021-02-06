import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebaseUser } from '../utils/hooks'
import { writeChore } from '../utils/fire'

const NewChore = () => {
  const [image, setImage] = useState('')
  const [details, setDetails] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [taskValue, setTaskValue] = useState('')
  const [rewardNegotiable, setRewardNegotiable] = useState(false)
  const user = useFirebaseUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    writeChore(user, {
      image,
      details,
      taskTitle,
      taskValue,
      rewardNegotiable,
    })
  }

  return (
    <form
      className="space-y-8 divide-y divide-gray-200 bg-yellow-200 p-2 px-10 rounded-md shadow-lg text-black"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="flex">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 w-1/2 pr-2">
            <div className="sm:col-span-6">
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-1/2">
            <label htmlFor="first_name" className="block text-sm font-medium">
              Chore Details
            </label>
            <div className="mt-1">
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="last_name" className="block text-sm font-medium">
                Task Title
              </label>
              <div className="mt-1">
                <input
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="money" className="block text-sm font-medium">
                Value
              </label>
              <div className="mt-1">
                <input
                  value={taskValue}
                  onChange={(e) => setTaskValue(e.target.value)}
                  type="number"
                  name="last_name"
                  id="last_name"
                  className="shadow-sm focus:ring-blue-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="mt-6">
            <fieldset>
              <div className="mt-4 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      value={rewardNegotiable}
                      onChange={(e) => setRewardNegotiable(e.target.value)}
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium">
                      Reward Negotiable
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Link
            to="../"
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewChore
