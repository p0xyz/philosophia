import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';

import { FormType } from '@/types/microCMS';

import { APP_REGULATION_EMAIL, APP_TITLE } from '@/constant/common';

import { sendForm } from '@/libs/api';

import { useWidth } from '@/contexts/useWidth';
import { useSetPageContext } from '@/contexts/usePageContext';

const Contact: FC = () => {
  const router = useRouter();
  const { isSP } = useWidth();

  useSetPageContext({
    type: 'contact',
    title: 'お問い合わせ',
    description: `${APP_TITLE}のお問い合わせフォームです。`,
    path: '/contact',
  });

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isProfessionError, setIsProfessionError] = useState(false);
  const [isContentError, setIsContentError] = useState(false);

  const isButtonDisabled =
    !name.length ||
    name.length >= 50 ||
    !email.length ||
    !email.match(APP_REGULATION_EMAIL) ||
    !profession.length ||
    content.length < 5;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const formPost = async () => {
    if (isButtonDisabled) return;

    setIsSubmitting(true);
    setIsFailed(false);

    const params: FormType = {
      via: ['philosophia000.vercel.app'],
      name,
      email,
      profession,
      content,
      isReplied: false,
    };

    try {
      await sendForm(params);

      router.push('/contact/39');
    } catch {
      setIsSubmitting(false);
      setIsFailed(true);
    }
  };

  const formContents: {
    heading: string;
    type: 'text' | 'email';
    placeholder: string;
    onChange: (value: string) => void;
    onError: (value: string) => void;
    isError: boolean;
    errorMessage: string;
    isTextarea: boolean;
  }[] = [
    {
      heading: 'お名前',
      type: 'text',
      placeholder: 'モチた モチお',
      onChange: (value) => setName(value),
      onError: (value) => setIsNameError(!value.length || value.length >= 50),
      isError: isNameError,
      errorMessage: !name.length
        ? 'お名前の入力は必須です。'
        : 'お名前は50文字以内で入力してください。',
      isTextarea: false,
    },
    {
      heading: '返信用メールアドレス',
      type: 'email',
      placeholder: 'mochi@example.com',
      onChange: (value) => setEmail(value),
      onError: (value) =>
        setIsEmailError(!value.length || !value.match(APP_REGULATION_EMAIL)),
      isError: isEmailError,
      errorMessage: !email.length
        ? 'メールアドレスの入力は必須です。'
        : 'メールアドレスの形式で入力してください。',
      isTextarea: false,
    },
    {
      heading: '所属・ご職業',
      type: 'text',
      placeholder: 'モチつき名人',
      onChange: (value) => setProfession(value),
      onError: (value) => setIsProfessionError(!value.length),
      isError: isProfessionError,
      errorMessage: '所属・ご職業の入力は必須です。',
      isTextarea: false,
    },
    {
      heading: 'お問い合わせ内容',
      type: 'text',
      placeholder: 'モチには醤油はいらないです。',
      onChange: (value) => setContent(value),
      onError: (value) => setIsContentError(value.length < 5),
      isError: isContentError,
      errorMessage: !content.length
        ? 'お問い合わせ内容の入力は必須です。'
        : 'お問い合わせ内容は5文字以上入力してください。',
      isTextarea: true,
    },
  ];

  return (
    <Layout>
      <TextPageLayout title={`${APP_TITLE}へのお問い合わせ`}>
        <Flex as="form" flexDir="column" gap="32px">
          {formContents.map((content) => (
            <Flex flexDir="column" key={content.heading} gap="4px">
              <Heading
                as="h3"
                fontSize="1.4rem"
                sx={{
                  '&::after': {
                    content: "'*'",
                    color: 'red.500',
                  },
                }}
              >
                {content.heading}
              </Heading>
              {content.isTextarea ? (
                <Textarea
                  placeholder={`例：${content.placeholder}`}
                  onChange={(e) => {
                    content.onChange(e.target.value);
                    content.isError && content.onError(e.target.value);
                  }}
                  focusBorderColor="base.400"
                  variant="flushed"
                  onBlur={(e) => content.onError(e.target.value)}
                  h="120px"
                  fontSize={isSP ? '1.6rem' : '1.4rem'}
                  _placeholder={{ color: 'base.400' }}
                />
              ) : (
                <Input
                  type={content.type}
                  placeholder={`例：${content.placeholder}`}
                  onChange={(e) => {
                    content.onChange(e.target.value);
                    content.isError && content.onError(e.target.value);
                  }}
                  focusBorderColor="base.400"
                  variant="flushed"
                  onBlur={(e) => content.onError(e.target.value)}
                  py="16px"
                  fontSize={isSP ? '1.6rem' : '1.4rem'}
                  _placeholder={{ color: 'base.400' }}
                />
              )}
              {content.isError && (
                <Text color="red.500" fontSize="1.2rem">
                  {content.errorMessage}
                </Text>
              )}
            </Flex>
          ))}
          <Flex flexDir="column" gap="16px">
            <Flex
              as="button"
              type="button"
              onClick={() => formPost()}
              justifyContent="space-between"
              alignItems="center"
              w="120px"
              color="white"
              bg="base.800"
              p="8px"
              fontFamily="en"
              fontSize="1.7rem"
              opacity={1}
              transition="opacity 0.2s"
              sx={{
                ...(isButtonDisabled && {
                  opacity: 0.4,
                  cursor: 'not-allowed',
                }),
              }}
            >
              <Text pt="3px">{isSubmitting ? 'Sending...' : 'Send'}</Text>
              {isSubmitting && <Spinner />}
            </Flex>
            {isFailed && (
              <Text fontSize="1.2rem">
                申し訳ありません、正常に送信できませんでした。時間をあけてもう一度お試しください。
              </Text>
            )}
          </Flex>
        </Flex>
      </TextPageLayout>
    </Layout>
  );
};

export default Contact;
