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
import { MicroCMSFormType } from '@/types/microCMS';
import { PATH_CONTACT_39, PATH_INDEX } from '@/constant/path';
import { postApi } from '@/libs/api';

const EMAIL_REG = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;

const Contact: FC = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const isNameError = !name.length || name.length >= 50;
  const isEmailError = !email.length || !email.match(EMAIL_REG);
  const isProfessionError = !profession.length;
  const isContentError = content.length < 5;

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
    description?: string;
    type: 'text' | 'email';
    placeholder: string;
    onChange: (e: string) => void;
    isError: boolean;
    isTextarea: boolean;
  }[] = [
    {
      heading: 'お名前',
      type: 'text',
      placeholder: 'モチた モチお',
      onChange: (value) => setName(value),
      isError: isNameError,

      isTextarea: false,
    },
    {
      heading: '返信用メールアドレス',
      description: 'メールアドレスの形式で入力してください。',
      type: 'email',
      placeholder: 'mochi@example.com',
      onChange: (value) => setEmail(value),
      isError: isEmailError,
      isTextarea: false,
    },
    {
      heading: '所属・ご職業など',
      description:
        'どういった方からのご連絡なのかが分かるようにご記入ください。',
      type: 'text',
      placeholder: 'モチつき名人',
      onChange: (value) => setProfession(value),
      isError: isProfessionError,
      isTextarea: false,
    },
    {
      heading: 'ご連絡内容',
      description: 'ご連絡の内容を具体的にご記入ください。（5文字以上）',
      type: 'text',
      placeholder: 'モチには醤油はいらないです。',
      onChange: (value) => setContent(value),
      isError: isContentError,

      isTextarea: true,
    },
  ];

  return (
    <Layout>
      <TextPageLayout title="月波へのご連絡">
        <Flex as="form" flexDir="column" gap="32px">
          {formContents.map((content) => (
            <Flex flexDir="column" key={content.heading} gap="4px">
              <Heading
                as="h3"
                fontSize="1.4rem"
                sx={{
                  '&::after': {
                    content: "'*'",
                    color: 'red.300',
                  },
                }}
              >
                {content.heading}
              </Heading>
              {content.description && (
                <Text color="black600" fontSize="1.2rem">
                  {content.description}
                </Text>
              )}
              {content.isTextarea ? (
                <Textarea
                  placeholder={`例：${content.placeholder}`}
                  onChange={(e) => content.onChange(e.target.value)}
                  focusBorderColor="black400"
                  variant="flushed"
                  h="120px"
                  fontSize="1.4rem"
                  _placeholder={{ color: 'black400' }}
                />
              ) : (
                <Input
                  type={content.type}
                  placeholder={`例：${content.placeholder}`}
                  onChange={(e) => content.onChange(e.target.value)}
                  focusBorderColor="black400"
                  variant="flushed"
                  py="16px"
                  fontSize="1.4rem"
                  _placeholder={{ color: 'black400' }}
                />
              )}
            </Flex>
          ))}
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
            <Text>
              申し訳ありません、送信できませんでした。時間をあけてもう一度お試しください。
            </Text>
          )}
        </Flex>
      </TextPageLayout>
    </Layout>
  );
};

export default Contact;
