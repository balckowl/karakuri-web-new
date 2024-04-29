"use client"
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RedirectPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/redirect_page_url') // ここでリダイレクト
  }, [])

  return null
}