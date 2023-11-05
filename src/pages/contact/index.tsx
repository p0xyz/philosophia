import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  Textarea,
  useMediaQuery,
} from '@chakra-ui/react';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';

import { MicroCMSFormType } from '@/types/microCMS';

import { PATH_CONTACT_39 } from '@/constant/path';
import { APP_REGULATION_EMAIL } from '@/constant/app';

import { postApi } from '@/libs/api';

const Contact: FC = () => {
  const router = useRouter();
  const [isSP] = useMediaQuery('(max-width: 480px)');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isProfessionError, setIsProfessionError] = useState(false);
  const [isContentError, setIsContentError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const formPost = async () => {
    if (isNameError || isEmailError || isProfessionError || isContentError) {
      return;
    }

    setIsSubmitting(true);
    setIsFailed(false);

    const params: MicroCMSFormType = {
      via: ['philosophia000.vercel.app'],
      name: name,
      email: email,
      profession: profession,
      content: content,
      isReplyed: false,
    };

    try {
      await postApi(params);

      router.push(PATH_CONTACT_39);
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
    onErrorWithValue: (value: string) => void;
    onErrorWithFlag: () => void;
    isError: boolean;
    errorMessage: string;
    isTextarea: boolean;
  }[] = [
    {
      heading: 'お名前',
      type: 'text',
      placeholder: 'モチた モチお',
      onChange: (value) => setName(value),
      onErrorWithValue: (value) =>
        setIsNameError(!value.length || value.length >= 50),
      onErrorWithFlag: () => setIsNameError(false),
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
      onErrorWithValue: (value) =>
        setIsEmailError(!value.length || !value.match(APP_REGULATION_EMAIL)),
      onErrorWithFlag: () => setIsEmailError(false),
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
      onErrorWithValue: (value) => setIsProfessionError(!value.length),
      onErrorWithFlag: () => setIsProfessionError(false),
      isError: isProfessionError,
      errorMessage: '所属・ご職業の入力は必須です。',
      isTextarea: false,
    },
    {
      heading: 'お問い合わせ内容',
      type: 'text',
      placeholder: 'モチには醤油はいらないです。',
      onChange: (value) => setContent(value),
      onErrorWithValue: (value) => setIsContentError(value.length < 5),
      onErrorWithFlag: () => setIsContentError(false),
      isError: isContentError,
      errorMessage: !content.length
        ? 'お問い合わせ内容の入力は必須です。'
        : 'お問い合わせ内容は5文字以上入力してください。',
      isTextarea: true,
    },
  ];

  return (
    <Layout>
      <TextPageLayout title="月波へのお問い合わせ">
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
                    content.onErrorWithFlag();
                  }}
                  focusBorderColor="black400"
                  variant="flushed"
                  onBlur={(e) => content.onErrorWithValue(e.target.value)}
                  h="120px"
                  fontSize={isSP ? '1.6rem' : '1.4rem'}
                  _placeholder={{ color: 'black400' }}
                />
              ) : (
                <Input
                  type={content.type}
                  placeholder={`例：${content.placeholder}`}
                  onChange={(e) => {
                    content.onChange(e.target.value);
                    content.onErrorWithFlag();
                  }}
                  focusBorderColor="black400"
                  variant="flushed"
                  onBlur={(e) => content.onErrorWithValue(e.target.value)}
                  py="16px"
                  fontSize={isSP ? '1.6rem' : '1.4rem'}
                  _placeholder={{ color: 'black400' }}
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
              bg="black800"
              p="8px"
              fontFamily="en"
              fontSize="1.7rem"
              opacity={1}
              transition="opacity 0.2s"
              sx={{
                ...((isNameError ||
                  isEmailError ||
                  isProfessionError ||
                  isContentError ||
                  isSubmitting) && {
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
